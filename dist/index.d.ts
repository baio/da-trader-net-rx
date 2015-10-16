import traderNet = require("./trader-net");
import utils = require("./utils");
import ticketCodes = require("./enums/ticket-codes");
import currencyCodes = require("./enums/currency-codes");
import orderCodes = require("./enums/order-codes");
import securityTypes = require("./enums/security-types");
declare module traderNetRx {
    type TraderNet = traderNet.TraderNet;
    type TicketCodes = ticketCodes.TicketCodes;
    type CurrencyCodes = currencyCodes.CurrencyCodes;
    type OrderTypes = orderCodes.OrderTypes;
    type OrderExpirationTypes = orderCodes.OrderExpirationTypes;
    type OrderStatusCodes = orderCodes.OrderStatusCodes;
    type OrderActionTypes = orderCodes.OrderActionTypes;
    type SecurityType = securityTypes.SecurityType;
    type SecurityKind = securityTypes.SecurityKind;
    var getSecurity: typeof utils.getSecurity;
}
export = traderNetRx;
