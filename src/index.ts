import traderNet = require("./trader-net");
import utils = require("./utils");

import ticketCodes = require("./enums/ticket-codes");
import currencyCodes = require("./enums/currency-codes");
import orderCodes = require("./enums/order-codes");
import securityTypes = require("./enums/security-types");
import types = require("./types");

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
	
	
	export type ITraderNetAuth = types.ITraderNetAuth;
	export type BookOrderActions = types.BookOrderActions;
	export var BookOrderActions = types.BookOrderActions;
	
	export type IBookOrder = types.IBookOrder;
	export type IPutOrderData = types.IPutOrderData;
	export type IOrder = types.IOrder;
	export type ITraderNetAccount = types.ITraderNetAccount;	
	export type ITraderNetPosition = types.ITraderNetPosition;
	export type ITraderNetPortfolio = types.ITraderNetPortfolio;
	export type ITraderNetAuthResult = types.ITraderNetAuthResult;
	export type IPutOrderResult = types.IPutOrderResult;
	export type ITraderNetPutOrderData = types.ITraderNetPutOrderData;
	export type ITraderNetQuote = types.ITraderNetQuote;


}

export = traderNetRx;
