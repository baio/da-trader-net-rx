import ticketCodes = require("./enums/ticket-codes");
import TicketCodes = ticketCodes.TicketCodes;
var SEC_LIST = require("../data/SEC_LIST_190315.json");
export interface ISecurity {
    ticket: TicketCodes
    code: string
    lotSize: number
}

export function getSecurity(code:TicketCodes):ISecurity {

    var seq = SEC_LIST[TicketCodes[code]];
    if (!seq)
        throw new Error("Code not found");

    return {
        ticket: code, code: TicketCodes[code], lotSize: seq
    };

}

export function getSecurities():Array<ISecurity> {


    return Object.keys(SEC_LIST).map((key: string) => {return {
            ticket: TicketCodes[key],
            code: key,
            lotSize: SEC_LIST[key]
    }});
}

export function getCodes(tickets:Array<TicketCodes|string>, sort:boolean = true):Array<string> {
    var res = typeof tickets[0] != "string" ? tickets.map(m => TicketCodes[<any>m]) : tickets;
    if (sort)
        res.sort();
    return <Array<string>>res;
}

