import traderNet = require("./trader-net");
import utils = require("./utils");
import ticketCodes = require("./enums/ticket-codes");
import currencyCodes = require("./enums/currency-codes");
import orderCodes = require("./enums/order-codes");
import securityTypes = require("./enums/security-types");
declare module traderNetRx {
    var TraderNet: typeof traderNet.TraderNet;
    var TicketCodes: typeof ticketCodes.TicketCodes;
    var CurrencyCodes: typeof currencyCodes.CurrencyCodes;
    var OrderTypes: typeof orderCodes.OrderTypes;
    var OrderExpirationTypes: typeof orderCodes.OrderExpirationTypes;
    var OrderStatusCodes: typeof orderCodes.OrderStatusCodes;
    var OrderActionTypes: typeof orderCodes.OrderActionTypes;
    var SecurityType: typeof securityTypes.SecurityType;
    var SecurityKind: typeof securityTypes.SecurityKind;
    var getSecurity: typeof utils.getSecurity;
}
export = traderNetRx;
