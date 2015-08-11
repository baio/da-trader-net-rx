import ticketCodes = require("./enums/ticket-codes");
import TicketCodes = ticketCodes.TicketCodes;
export interface ISecurity {
    ticket: TicketCodes;
    code: string;
    lotSize: number;
}
export declare function getSecurity(code: TicketCodes): ISecurity;
export declare function getSecurities(): Array<ISecurity>;
export declare function getCodes(tickets: Array<TicketCodes | string>, sort?: boolean): Array<string>;
