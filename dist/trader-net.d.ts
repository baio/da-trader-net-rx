import Rx = require("rx");
import types = require("./types");
import ITraderNetAuth = types.ITraderNetAuth;
import ITraderNetAuthResult = types.ITraderNetAuthResult;
import ITraderNetQuote = types.ITraderNetQuote;
import IPutOrderData = types.IPutOrderData;
import IOrder = types.IOrder;
import ITraderNetPortfolio = types.ITraderNetPortfolio;
export declare class TraderNet {
    private url;
    private ws;
    quotesStream: Rx.Observable<ITraderNetQuote[]>;
    ordersStream: Rx.Observable<IOrder[]>;
    portfolioStream: Rx.Observable<ITraderNetPortfolio>;
    constructor(url: string);
    connect(auth: ITraderNetAuth): Rx.Observable<ITraderNetAuthResult>;
    startRecieveQuotes(quotes: string[]): Rx.IDisposable;
    startRecieveOrders(): Rx.IDisposable;
    startRecievePortfolio(): Rx.IDisposable;
    putOrder(data: IPutOrderData): Rx.IDisposable;
    disconnect(): void;
}
