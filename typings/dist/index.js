///<reference path="../typings/tsd.d.ts"/>
var Rx = require("rx");
var io = require("socket.io-client");
var security = require("trader-net-crypto");
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
            var sig = security.sign(authData, auth.securityKey);
            return Rx.Observable.fromCallback(ws.emit, ws)('auth', authData, sig);
        });
    };
    return TraderNet;
})();
module.exports = TraderNet;
