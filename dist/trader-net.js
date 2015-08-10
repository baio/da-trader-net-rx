
var Rx = require("rx");
var io = require("socket.io-client");
var security = require("./crypto");
var TraderNet = (function () {
    function TraderNet(url) {
        this.url = url;
    }
    TraderNet.prototype.connect = function (auth) {
        var _this = this;
        var ws = io(this.url, { transports: ['websocket'], forceNew: true, autoConnect: true });
        return Rx.Observable.fromCallback(ws.once, ws)("connect")
            .flatMap(function () {
            var authData = {
                apiKey: auth.apiKey,
                cmd: 'getAuthInfo',
                nonce: Date.now()
            };
            var sign = security.sign(authData, auth.securityKey);
            return Rx.Observable.fromNodeCallback(ws.emit, ws)('auth', authData, sign);
        })
            .do(function (_) { return _this.ws = ws; });
    };
    TraderNet.prototype.disconnect = function () {
        if (!this.ws)
            throw "Not connected";
        this.ws.disconnect();
        this.ws = null;
    };
    return TraderNet;
})();
exports.TraderNet = TraderNet;
