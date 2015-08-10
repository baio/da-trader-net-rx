
var Rx = require("rx");
var io = require("socket.io-client");
var security = require("./crypto");
var sign = security.sign;
var TraderNet = (function () {
    function TraderNet(url) {
        this.url = url;
    }
    TraderNet.prototype.connect = function (auth) {
        var ws = io(this.url, { transports: ['websocket'], forceNew: true, autoConnect: true });
        return Rx.Observable.fromCallback(ws.once, ws)("connect")
            .flatMap(function () {
            var authData = {
                apiKey: auth.apiKey,
                cmd: 'getAuthInfo',
                nonce: Date.now()
            };
            var sig = sign(authData, auth.securityKey);
            return Rx.Observable.fromCallback(ws.emit, ws)('auth', authData, sig);
        });
    };
    return TraderNet;
})();
exports.TraderNet = TraderNet;
