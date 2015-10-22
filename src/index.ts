import traderNet = require("./trader-net");
import utils = require("./utils");

import ticketCodes = require("./enums/ticket-codes");
import currencyCodes = require("./enums/currency-codes");
import orderCodes = require("./enums/order-codes");
import securityTypes = require("./enums/security-types");

module traderNetRx {
	export type TicketCodes = ticketCodes.TicketCodes;
	export var TicketCodes = ticketCodes.TicketCodes;
	export type CurrencyCodes = currencyCodes.CurrencyCodes;
	export var CurrencyCodes = currencyCodes.CurrencyCodes;
	export type OrderTypes = orderCodes.OrderTypes;
	export var OrderTypes = orderCodes.OrderTypes;
	export type OrderExpirationTypes = orderCodes.OrderExpirationTypes;
	export var OrderTypes = orderCodes.OrderTypes;
	export type OrderStatusCodes = orderCodes.OrderStatusCodes;
	export var OrderStatusCodes = orderCodes.OrderStatusCodes;
	export type OrderActionTypes = orderCodes.OrderActionTypes;
	export var OrderActionTypes = orderCodes.OrderActionTypes;
	export type SecurityType = securityTypes.SecurityType;
	export var SecurityType = securityTypes.SecurityType;
	export type SecurityKind = securityTypes.SecurityKind;
	export var SecurityKind = securityTypes.SecurityKind;
	export var getSecurity = utils.getSecurity;
	export type TraderNet = traderNet.TraderNet;
	export var TraderNet = traderNet.TraderNet;
}

export = traderNetRx;
