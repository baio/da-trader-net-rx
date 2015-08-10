///<reference path="../typings/tsd.d.ts"/>
import Rx = require("rx");
import io = require("socket.io-client");
import security = require("./crypto");
import types = require("./types");

import ITraderNetAuth = types.ITraderNetAuth;
import ITraderNetAuthResult = types.ITraderNetAuthResult;
 
export class TraderNet {
    
    private ws:SocketIOClient.Socket;

    constructor(private url:string) {
    }

    connect(auth:ITraderNetAuth): Rx.Observable<ITraderNetAuthResult> {            
        var ws = io(this.url, {transports: ['websocket'], forceNew: true, autoConnect : true});
        return Rx.Observable.fromCallback(ws.once, ws)("connect")
        .flatMap(() => {
            let authData = {
                apiKey: auth.apiKey,
                cmd: 'getAuthInfo',
                nonce: Date.now()
            };
            var sign = security.sign(authData, auth.securityKey);
            return Rx.Observable.fromNodeCallback<ITraderNetAuthResult>(ws.emit, ws)('auth', authData, sign);                 
        })
        .do(_ => this.ws = ws);            
    }
    
    disconnect(): void {            
        if (!this.ws)
            throw "Not connected";
        this.ws.disconnect();
        this.ws = null;
    }           
           
}


