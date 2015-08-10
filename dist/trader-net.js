
var Rx = require("rx");
var io = require("socket.io-client");
var security = require("./crypto");
var mapper = require("./mapper");
var TraderNet = (function () {
    function TraderNet(url) {
        this.url = url;
        this.ws = io(this.url, { transports: ['websocket'], forceNew: true, autoConnect: false });
        this.quotesStream = Rx.Observable.fromCallback(this.ws.on, this.ws)("q")
            .map(mapper.mapQuotes);
    }
    TraderNet.prototype.connect = function (auth) {
        var _this = this;
        this.ws.connect();
        return Rx.Observable.fromCallback(this.ws.once, this.ws)("connect")
            .flatMap(function () {
            var authData = {
                apiKey: auth.apiKey,
                cmd: 'getAuthInfo',
                nonce: Date.now()
            };
            var sign = security.sign(authData, auth.securityKey);
            return Rx.Observable.fromNodeCallback(_this.ws.emit, _this.ws)('auth', authData, sign);
        });
    };
    TraderNet.prototype.startRecieveQuotes = function (quotes) {
        var emitor = this.ws.emit('notifyQuotes', quotes);
        return Rx.Disposable.create(function () { return emitor.close(); });
    };
    TraderNet.prototype.disconnect = function () {
        this.ws.disconnect();
        this.ws = null;
    };
    return TraderNet;
})();
exports.TraderNet = TraderNet;
