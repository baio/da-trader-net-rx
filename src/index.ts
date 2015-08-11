///<reference path="../typings/tsd.d.ts"/>
import traderNet = require("./trader-net");
import utils = require("./utils");

import ticketCodes = require("./enums/ticket-codes");
import currencyCodes = require("./enums/currency-codes");
import orderCodes = require("./enums/order-codes");
import securityTypes = require("./enums/security-types");

module traderNetRx {
	export var TraderNet = traderNet.TraderNet; 	
	export var TicketCodes = ticketCodes.TicketCodes;
	export var CurrencyCodes = currencyCodes.CurrencyCodes;
	export var OrderTypes = orderCodes.OrderTypes;
	export var OrderExpirationTypes = orderCodes.OrderExpirationTypes;
	export var OrderStatusCodes = orderCodes.OrderStatusCodes;
	export var OrderActionTypes = orderCodes.OrderActionTypes;
	export var SecurityType = securityTypes.SecurityType;
	export var SecurityKind = securityTypes.SecurityKind;
	export var getSecurity = utils.getSecurity;
}

export = traderNetRx;
