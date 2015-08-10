///<reference path="../typings/tsd.d.ts"/>
import Rx = require("rx");
import io = require("socket.io-client");
import security = require("./crypto");
import types = require("./types");
import mapper = require("./mapper");

import ITraderNetAuth = types.ITraderNetAuth;
import ITraderNetAuthResult = types.ITraderNetAuthResult;
import ITraderNetQuote = types.ITraderNetQuote;

 
export class TraderNet {
    
    private ws:SocketIOClient.Socket;
    
    public quotesStream: Rx.Observable<ITraderNetQuote[]>; 

    constructor(private url:string) {
        this.ws = io(this.url, {transports: ['websocket'], forceNew: true, autoConnect : false});        
        this.quotesStream = Rx.Observable.fromCallback<any>(this.ws.on, this.ws)("q")
        .map(mapper.mapQuotes);                
    }

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
            return Rx.Observable.fromNodeCallback<ITraderNetAuthResult>(this.ws.emit, this.ws)('auth', authData, sign);                 
        });            
    }
    
    startRecieveQuotes(quotes: string[]) : Rx.IDisposable {        
        var emitor = this.ws.emit('notifyQuotes', quotes);
        return Rx.Disposable.create(() => emitor.close());        
    }

           
    disconnect(): void {            
        this.ws.disconnect();
        this.ws = null;
    }           
           
}


