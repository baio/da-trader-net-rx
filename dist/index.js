var traderNet = require("./trader-net");
var utils = require("./utils");
var traderNetRx;
(function (traderNetRx) {
    traderNetRx.getSecurity = utils.getSecurity;
    traderNetRx.TraderNet = traderNet.TraderNet;
})(traderNetRx || (traderNetRx = {}));
module.exports = traderNetRx;
