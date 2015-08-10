import ticketCodes = require("./enums/ticket-codes");
import currencyCodes = require("./enums/currency-codes");
import orderCodes = require("./enums/order-codes");
import securityTypes = require("./enums/security-types");

import TicketCodes = ticketCodes.TicketCodes;
import CurrencyCodes = currencyCodes.CurrencyCodes;
import OrderTypes = orderCodes.OrderTypes;
import OrderExpirationTypes = orderCodes.OrderExpirationTypes;
import OrderStatusCodes = orderCodes.OrderStatusCodes;
import OrderActionTypes = orderCodes.OrderActionTypes;
import SecurityType = securityTypes.SecurityType;
import SecurityKind = securityTypes.SecurityKind;
        
export interface ITraderNetAuth {
    apiKey: string
    securityKey: string
}

export enum BookOrderActions {insert, update, remove}

export interface IBookOrder {
    index: number
    action: BookOrderActions
    ticket: TicketCodes
    price: number
    quantity: number
    orderAction: OrderActionTypes
}

export interface IPutOrderData {
    ticket: TicketCodes|string
    action: OrderActionTypes
    orderType: OrderTypes
    currency: CurrencyCodes
    quantity: number
    limitPrice?: number
    stopPrice?: number
    allOrNothing?: boolean
    expiration?: OrderExpirationTypes
    groupPortfolio?: number
    userOrderId?: string
}

export interface IOrder {
    id: number
    date: string
    status: OrderStatusCodes//???
    statusOriginal: OrderStatusCodes//???
    statusDate: string
    security: TicketCodes
    securityName: string
    securityName2: string
    oper: number//???
    type: number//???
    currency: CurrencyCodes
    price: number
    stopPrice: number
    quantity: number
    allOrNothing: boolean
    expiration: OrderExpirationTypes
    rep: string//???
    fv: string
    stat_prev: number
    userOrderId: string
}

export interface ITraderNetAccount {
    ///????????? ????????
    availableAmount: number
    ///?????? ?????
    currency: CurrencyCodes
    ///???? ?????? ?????
    currencyRate: number
    forecastIn: number
    forecastOut: number
}

export interface ITraderNetPosition {
    ///????? ??????
    security: TicketCodes
    ///??? ?????? ???
    securityType: SecurityType
    ///??? ?????? ???
    securityKind: SecurityKind
    //?????????
    price: number
    ///??????????
    quantity: number
    ///??????
    currency: CurrencyCodes
    ///???? ??????
    currencyRate: number
    ///???????????? ??????
    securityName: string
    ///?????????????? ???????????? ??????
    securityName2: string
    ///???? ????????
    openPrice : number
    ///???????? ????
    marketPrice: number
    /*
     //???
     vm: string
     //???
     go: number
     //???
     profit_close: number
     //???
     acc_pos_id: number
     //???
     trade: Array<{}>
     */
}

export interface ITraderNetPortfolio {
    ///???? ????????? ???????? (?????, ???????????? ?????? ????????)
    key: string
    ///?????? ?????? ???????
    accounts: Array<ITraderNetAccount>
    ///?????? ??????? ???????
    positions: Array<ITraderNetPosition>
}

export interface ITraderNetAuthResult {
    login: string
    mode: string
    trade: boolean
}

export interface IPutOrderResult {
    orderId: number
}

export interface ITraderNetPutOrderData {
    instr_name: string
    action_id: number
    order_type_id: number
    curr: string
    limit_price: number
    stop_price: number
    qty: number
    aon: number
    expiration_id: number
    submit_ch_c: number
    message_id: number
    replace_order_id: number
    groupPortfolioName: number
    userOrderId: string
}

export interface ITraderNetQuote {

    ///????? ??????
    security: TicketCodes
    ticket: string
    //???? ????????? ??????
    latestPrice : number
    bid: number
    ask: number
    lot: number
}

