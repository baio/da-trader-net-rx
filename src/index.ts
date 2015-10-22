import traderNet = require("./trader-net");
import utils = require("./utils");

import ticketCodes = require("./enums/ticket-codes");
import currencyCodes = require("./enums/currency-codes");
import orderCodes = require("./enums/order-codes");
import securityTypes = require("./enums/security-types");

module traderNetRx {
	export type TicketCodes = ticketCodes.TicketCodes;
	export type CurrencyCodes = currencyCodes.CurrencyCodes;
	export type OrderTypes = orderCodes.OrderTypes;
	export type OrderExpirationTypes = orderCodes.OrderExpirationTypes;
	export type OrderStatusCodes = orderCodes.OrderStatusCodes;
	export type OrderActionTypes = orderCodes.OrderActionTypes;
	export type SecurityType = securityTypes.SecurityType;
	export type SecurityKind = securityTypes.SecurityKind;
	export var getSecurity = utils.getSecurity;
	export type TraderNet = traderNet.TraderNet;
	export var TraderNet = traderNet.TraderNet;
}

export = traderNetRx;
