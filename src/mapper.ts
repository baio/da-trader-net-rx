/** 
import ticketCodes = require("./enums/ticket-codes");
import currencyCodes = require("./enums/currency-codes");
import orderCodes = require("./enums/order-codes");
import types = require("./trader-net-types");
*/
 
///<refernce path="types.d.ts" />

import utils = require("./trader-utils");
    
export function formatPutOrder(data:IPutOrderData):types.ITraderNetPutOrderData {
    return {
        instr_name: utils.getCodes([data.ticket])[0],
        action_id: data.action,
        order_type_id: data.orderType,
        curr: currencyCodes.CurrencyCodes[data.currency],
        limit_price: data.limitPrice,
        stop_price: data.stopPrice,
        qty: data.quantity,
        aon: data.allOrNothing ? 1 : 0,
        expiration_id: data.expiration,
        submit_ch_c: 1,
        message_id: 0,
        replace_order_id: 0,
        groupPortfolioName: data.groupPortfolio,
        userOrderId: data.userOrderId
    };
}

export function mapPortfolio(servicePortfolio:any):types.ITraderNetPortfolio {

    return {
        key: servicePortfolio.key,
        accounts: servicePortfolio.acc.map(mapAccount),
        positions: servicePortfolio.pos.map(mapPosition)
    }
}

function mapOrderBookItem(ticket: string, action: types.BookOrderActions, orderBookItem:any):types.IBookOrder {
    return {
        index: orderBookItem.k,
        ticket: ticketCodes.TicketCodes[ticket],
        action: action,
        price: orderBookItem.p,
        quantity: orderBookItem.q,
        orderAction: orderBookItem.s == "S" ? orderCodes.OrderActionTypes.Sell : orderCodes.OrderActionTypes.Buy
    };
}

export function mapOrderBook(orderBook:any):Array<types.IBookOrder> {
    //https://github.com/tradernet/tn.api#notifyOrderBook
    var res = orderBook.dom.map ((m: any) => {
        var ins = m.ins.map(x =>
            mapOrderBookItem(m.i, types.BookOrderActions.insert, x)
        );
        var upd = m.upd.map(x =>
                mapOrderBookItem(m.i, types.BookOrderActions.update, x)
        );
        var del = m.del.map(x =>
                mapOrderBookItem(m.i, types.BookOrderActions.remove, x)
        );
        return ins.concat(del).concat(upd);
    });
    return  [].concat.apply([],res);
}

export function mapOrder(tnOrder:any):types.IOrder {
    return <types.IOrder>{
        id: tnOrder.id,
        date: tnOrder.date,
        status: tnOrder.stat,
        statusOriginal: tnOrder.stat_orig,
        statusDate: tnOrder.stat_d,
        security: <any>ticketCodes.TicketCodes[tnOrder.instr],
        securityName: tnOrder.name,
        securityName2: tnOrder.name2,
        oper: tnOrder.oper,
        type: tnOrder.type,
        currency: <any>currencyCodes.CurrencyCodes[tnOrder.cur],
        price: tnOrder.p,
        stopPrice: tnOrder.stop,
        quantity: tnOrder.q,
        allOrNothing: !!tnOrder.aon,
        expiration: <any>orderCodes.OrderExpirationTypes[tnOrder.exp],
        rep: tnOrder.rep,//???
        fv: tnOrder.fv,
        stat_prev: tnOrder.stat_prev,
        userOrderId: tnOrder.userOrderId
    }
}

function mapAccount(serviceAccount:any):types.ITraderNetAccount {
    return {
        availableAmount: serviceAccount.s,
        currency: <any>currencyCodes.CurrencyCodes[serviceAccount.curr],
        currencyRate: serviceAccount.currval,
        forecastIn: serviceAccount.forecast_in,
        forecastOut: serviceAccount.forecast_out
    }
}

function mapPosition(servicePos:any):types.ITraderNetPosition {
    return {
        security: <any>ticketCodes.TicketCodes[servicePos.i],
        securityType: servicePos.t,
        securityKind: servicePos.k,
        price: servicePos.s,
        quantity: servicePos.q,
        currency: <any>currencyCodes.CurrencyCodes[servicePos.curr],
        currencyRate: servicePos.currval,
        securityName: servicePos.name,
        securityName2: servicePos.name2,
        openPrice: servicePos.open_bal,
        marketPrice: servicePos.mkt_price
    }
}

export function mapQuotes(serviceQuote:any):types.ITraderNetQuote {
    return {
        security: <any>ticketCodes.TicketCodes[serviceQuote.c],
        ticket: <string>serviceQuote.c,
        latestPrice: serviceQuote.ltp,
        lot: serviceQuote.x_lot,
        ask: serviceQuote.bap,
        bid: serviceQuote.bbp
    };
}



