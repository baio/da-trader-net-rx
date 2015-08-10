var ticketCodes = require("./enums/ticket-codes");
var TicketCodes = ticketCodes.TicketCodes;
function getSecurity(code) {
    var securities = require("./data/MX-TQBR-190315.json");
    var seq = securities[TicketCodes[code]];
    if (!seq)
        throw new Error("Code not found");
    return {
        ticket: code, code: TicketCodes[code], lotSize: seq
    };
}
exports.getSecurity = getSecurity;
function getSecurities() {
    var securities = require("../data/MX-TQBR-190315.json");
    return Object.keys(securities).map(function (key) {
        return {
            ticket: TicketCodes[key],
            code: key,
            lotSize: securities[key]
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
