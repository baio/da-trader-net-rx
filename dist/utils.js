var ticketCodes = require("./enums/ticket-codes");
var TicketCodes = ticketCodes.TicketCodes;
var SEC_LIST = require("../data/SEC_LIST_190315.json");
function getSecurity(code) {
    var seq = SEC_LIST[TicketCodes[code]];
    if (!seq)
        throw new Error("Code not found");
    return {
        ticket: code, code: TicketCodes[code], lotSize: seq
    };
}
exports.getSecurity = getSecurity;
function getSecurities() {
    return Object.keys(SEC_LIST).map(function (key) {
        return {
            ticket: TicketCodes[key],
            code: key,
            lotSize: SEC_LIST[key]
        };
    });
}
exports.getSecurities = getSecurities;
function getCodes(tickets, sort) {
    if (sort === void 0) { sort = true; }
    var res = typeof tickets[0] != "string" ? tickets.map(function (m) { return TicketCodes[m]; }) : tickets;
    if (sort)
        res.sort();
    return res;
}
exports.getCodes = getCodes;
