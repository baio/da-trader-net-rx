import traderNet = require("./trader-net");
import utils = require("./utils");
import ticketCodes = require("./enums/ticket-codes");
import currencyCodes = require("./enums/currency-codes");
import orderCodes = require("./enums/order-codes");
import securityTypes = require("./enums/security-types");
declare module traderNetRx {
    type TicketCodes = ticketCodes.TicketCodes;
    var TicketCodes: typeof ticketCodes.TicketCodes;
    type CurrencyCodes = currencyCodes.CurrencyCodes;
    var CurrencyCodes: typeof currencyCodes.CurrencyCodes;
    type OrderTypes = orderCodes.OrderTypes;
    var OrderTypes: typeof orderCodes.OrderTypes;
    type OrderExpirationTypes = orderCodes.OrderExpirationTypes;
    var OrderTypes: typeof orderCodes.OrderTypes;
    type OrderStatusCodes = orderCodes.OrderStatusCodes;
    var OrderStatusCodes: typeof orderCodes.OrderStatusCodes;
    type OrderActionTypes = orderCodes.OrderActionTypes;
    var OrderActionTypes: typeof orderCodes.OrderActionTypes;
    type SecurityType = securityTypes.SecurityType;
    var SecurityType: typeof securityTypes.SecurityType;
    type SecurityKind = securityTypes.SecurityKind;
    var SecurityKind: typeof securityTypes.SecurityKind;
    var getSecurity: typeof utils.getSecurity;
    type TraderNet = traderNet.TraderNet;
    var TraderNet: typeof traderNet.TraderNet;
}
export = traderNetRx;
