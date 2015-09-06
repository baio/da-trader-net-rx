///<reference path="../typings/tsd.d.ts"/>
import Rx = require("rx");
import io = require("socket.io-client");
import security = require("./crypto");
import types = require("./types");
import mapper = require("./mapper");

import ITraderNetAuth = types.ITraderNetAuth;
import ITraderNetAuthResult = types.ITraderNetAuthResult;
import ITraderNetQuote = types.ITraderNetQuote;
import IPutOrderData = types.IPutOrderData;
import IOrder = types.IOrder;
import ITraderNetPortfolio = types.ITraderNetPortfolio;
 
/**
 * Subscribe to market info.
 * Send orders. 
 */ 
export class TraderNet {
    
    private ws:SocketIOClient.Socket;
   
   /**
    * Stream of quotes. 
    */ 
    public quotesStream: Rx.Observable<ITraderNetQuote[]>;
    /**
     * Stream of orders.
     */ 
    public ordersStream: Rx.Observable<IOrder[]>;
    /**
     * Stream of changes in portfolio.
     */
    public portfolioStream: Rx.Observable<ITraderNetPortfolio>;

    constructor(private url:string) {
        this.ws = io(this.url, {transports: ['websocket'], forceNew: true, autoConnect : false});        
        
        this.quotesStream = Rx.Observable.fromEventPattern<any>((h) => this.ws.on("q", h), (h) => this.ws.off("q", h))
        .map(mapper.mapQuotes);
        
        this.ordersStream = Rx.Observable.fromEventPattern<any>((h) => this.ws.on("orders", h), (h) => this.ws.off("orders", h))
        .map(mapper.mapOrders);
        
        this.portfolioStream = Rx.Observable.fromEventPattern<any>(
            (h) => this.ws.on("portfolio", h), (h) => this.ws.off("portfolio", h))
            .map(mapper.mapPortfolio);
    }

    /**
     * Connect to trdaer-net service.
     */
    connect(auth:ITraderNetAuth): Rx.Observable<ITraderNetAuthResult> {
        this.ws.connect();            
        return Rx.Observable.fromCallback(this.ws.once, this.ws)("connect")
        .flatMap(() => {
            let authData = {
                apiKey: auth.apiKey,
                cmd: 'getAuthInfo',
                nonce: Date.now()
            };
            var sign = security.sign(authData, auth.securityKey);
            return Rx.Observable.fromNodeCallback<ITraderNetAuthResult>(this.ws.emit, this.ws, null)('auth', authData, sign);                 
        });            
    }
    
    /**
     * Starts recieve quotes.
     * Yoy should be subscribed on quotesStream. 
     * @params
     * quotes
     * Ticket name, example: SBER
     * return
     * IDisposable - allow stop recieve quotes
     */
    startRecieveQuotes(quotes: string[]) : Rx.IDisposable {        
        var emitor = this.ws.emit('notifyQuotes', quotes);
        return Rx.Disposable.create(() => emitor.close());        
    }

    /**
     * Starts recieve orders.
     * Yoy should be subscribed on ordersStream. 
     * Needs to be invoked after connection (authorization).
     * return
     * IDisposable - allow stop recieve oredrs
     */
    startRecieveOrders() : Rx.IDisposable {        
        var emitor = this.ws.emit('notifyOrders');
        return Rx.Disposable.create(() => emitor.close());        
    }
    
    /**
     * Starts recieve portfolio changes.
     * Yoy should be subscribed on portfolioStream.
     * Needs to be invoked after connection (authorization) . 
     * @params
     * return
     * IDisposable - allow stop recieve portfolio changes
     */    
    startRecievePortfolio() : Rx.IDisposable {        
        var emitor = this.ws.emit('notifyPortfolio');
        return Rx.Disposable.create(() => emitor.close());        
    }


    /**
     * Put order
     */    
    putOrder(data: IPutOrderData): Rx.IDisposable {
        var emitor = this.ws.emit('putOrder', mapper.formatPutOrder(data));                
        return Rx.Disposable.create(() => emitor.close());
    }
           
    /**
     * Disconnect from trader-net service
     */           
    disconnect(): void {            
        this.ws.disconnect();
        this.ws = null;
    }           
           
}


