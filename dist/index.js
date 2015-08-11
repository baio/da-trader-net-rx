
var traderNet = require("./trader-net");
var utils = require("./utils");
var ticketCodes = require("./enums/ticket-codes");
var currencyCodes = require("./enums/currency-codes");
var orderCodes = require("./enums/order-codes");
var securityTypes = require("./enums/security-types");
var TraderNetRx;
(function (TraderNetRx) {
    TraderNetRx.TraderNet = traderNet.TraderNet;
    TraderNetRx.TicketCodes = ticketCodes.TicketCodes;
    TraderNetRx.CurrencyCodes = currencyCodes.CurrencyCodes;
    TraderNetRx.OrderTypes = orderCodes.OrderTypes;
    TraderNetRx.OrderExpirationTypes = orderCodes.OrderExpirationTypes;
    TraderNetRx.OrderStatusCodes = orderCodes.OrderStatusCodes;
    TraderNetRx.OrderActionTypes = orderCodes.OrderActionTypes;
    TraderNetRx.SecurityType = securityTypes.SecurityType;
    TraderNetRx.SecurityKind = securityTypes.SecurityKind;
    TraderNetRx.getSecurity = utils.getSecurity;
})(TraderNetRx || (TraderNetRx = {}));
module.exports = TraderNetRx;
