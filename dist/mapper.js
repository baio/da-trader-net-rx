var ticketCodes = require("./enums/ticket-codes");
var currencyCodes = require("./enums/currency-codes");
var orderCodes = require("./enums/order-codes");
var types = require("./types");
var utils = require("./utils");
function formatPutOrder(data) {
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
exports.formatPutOrder = formatPutOrder;
function mapPortfolio(servicePortfolio) {
    return {
        key: servicePortfolio.key,
        accounts: servicePortfolio.acc.map(mapAccount),
        positions: servicePortfolio.pos.map(mapPosition)
    };
}
exports.mapPortfolio = mapPortfolio;
function mapOrderBookItem(ticket, action, orderBookItem) {
    return {
        index: orderBookItem.k,
        ticket: ticketCodes.TicketCodes[ticket],
        action: action,
        price: orderBookItem.p,
        quantity: orderBookItem.q,
        orderAction: orderBookItem.s == "S" ? orderCodes.OrderActionTypes.Sell : orderCodes.OrderActionTypes.Buy
    };
}
function mapOrderBook(orderBook) {
    var res = orderBook.dom.map(function (m) {
        var ins = m.ins.map(function (x) {
            return mapOrderBookItem(m.i, types.BookOrderActions.insert, x);
        });
        var upd = m.upd.map(function (x) {
            return mapOrderBookItem(m.i, types.BookOrderActions.update, x);
        });
        var del = m.del.map(function (x) {
            return mapOrderBookItem(m.i, types.BookOrderActions.remove, x);
        });
        return ins.concat(del).concat(upd);
    });
    return [].concat.apply([], res);
}
exports.mapOrderBook = mapOrderBook;
function mapOrder(tnOrder) {
    return {
        id: tnOrder.id,
        date: tnOrder.date,
        status: tnOrder.stat,
        statusOriginal: tnOrder.stat_orig,
        statusDate: tnOrder.stat_d,
        security: ticketCodes.TicketCodes[tnOrder.instr],
        securityName: tnOrder.name,
        securityName2: tnOrder.name2,
        oper: tnOrder.oper,
        type: tnOrder.type,
        currency: currencyCodes.CurrencyCodes[tnOrder.cur],
        price: tnOrder.p,
        stopPrice: tnOrder.stop,
        quantity: tnOrder.q,
        allOrNothing: !!tnOrder.aon,
        expiration: orderCodes.OrderExpirationTypes[tnOrder.exp],
        rep: tnOrder.rep,
        fv: tnOrder.fv,
        stat_prev: tnOrder.stat_prev,
        userOrderId: tnOrder.userOrderId
    };
}
exports.mapOrder = mapOrder;
function mapAccount(serviceAccount) {
    return {
        availableAmount: serviceAccount.s,
        currency: currencyCodes.CurrencyCodes[serviceAccount.curr],
        currencyRate: serviceAccount.currval,
        forecastIn: serviceAccount.forecast_in,
        forecastOut: serviceAccount.forecast_out
    };
}
function mapPosition(servicePos) {
    return {
        security: ticketCodes.TicketCodes[servicePos.i],
        securityType: servicePos.t,
        securityKind: servicePos.k,
        price: servicePos.s,
        quantity: servicePos.q,
        currency: currencyCodes.CurrencyCodes[servicePos.curr],
        currencyRate: servicePos.currval,
        securityName: servicePos.name,
        securityName2: servicePos.name2,
        openPrice: servicePos.open_bal,
        marketPrice: servicePos.mkt_price
    };
}
function mapQuote(serviceQuote) {
    return {
        security: ticketCodes.TicketCodes[serviceQuote.c],
        ticket: serviceQuote.c,
        latestPrice: serviceQuote.ltp,
        lot: serviceQuote.x_lot,
        ask: serviceQuote.bap,
        bid: serviceQuote.bbp
    };
}
function mapQuotes(serviceQuotes) {
    return serviceQuotes.q.map(mapQuote);
}
exports.mapQuotes = mapQuotes;
