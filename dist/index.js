var utils = require("./utils");
var traderNetRx;
(function (traderNetRx) {
    traderNetRx.getSecurity = utils.getSecurity;
})(traderNetRx || (traderNetRx = {}));
module.exports = traderNetRx;
