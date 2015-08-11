(function (OrderStatusCodes) {
    OrderStatusCodes[OrderStatusCodes["Received"] = 1] = "Received";
    OrderStatusCodes[OrderStatusCodes["Cancel"] = 2] = "Cancel";
    OrderStatusCodes[OrderStatusCodes["Placed"] = 10] = "Placed";
    OrderStatusCodes[OrderStatusCodes["Sent"] = 11] = "Sent";
    OrderStatusCodes[OrderStatusCodes["PartialFill"] = 12] = "PartialFill";
    OrderStatusCodes[OrderStatusCodes["CancelSent"] = 13] = "CancelSent";
    OrderStatusCodes[OrderStatusCodes["PartialExecuted"] = 20] = "PartialExecuted";
    OrderStatusCodes[OrderStatusCodes["Executed"] = 21] = "Executed";
    OrderStatusCodes[OrderStatusCodes["PartialCanceled"] = 30] = "PartialCanceled";
    OrderStatusCodes[OrderStatusCodes["Cancelled"] = 31] = "Cancelled";
    OrderStatusCodes[OrderStatusCodes["Rejected"] = 70] = "Rejected";
    OrderStatusCodes[OrderStatusCodes["Expired"] = 71] = "Expired";
    OrderStatusCodes[OrderStatusCodes["PartialExpired"] = 72] = "PartialExpired";
    OrderStatusCodes[OrderStatusCodes["MarketPlaceError"] = 73] = "MarketPlaceError";
    OrderStatusCodes[OrderStatusCodes["SendError"] = 74] = "SendError";
    OrderStatusCodes[OrderStatusCodes["CancelError"] = 75] = "CancelError";
})(exports.OrderStatusCodes || (exports.OrderStatusCodes = {}));
var OrderStatusCodes = exports.OrderStatusCodes;
(function (OrderActionTypes) {
    OrderActionTypes[OrderActionTypes["Buy"] = 1] = "Buy";
    OrderActionTypes[OrderActionTypes["BuyOnMargin"] = 2] = "BuyOnMargin";
    OrderActionTypes[OrderActionTypes["Sell"] = 3] = "Sell";
    OrderActionTypes[OrderActionTypes["SellShort"] = 4] = "SellShort";
})(exports.OrderActionTypes || (exports.OrderActionTypes = {}));
var OrderActionTypes = exports.OrderActionTypes;
(function (OrderTypes) {
    OrderTypes[OrderTypes["Market"] = 1] = "Market";
    OrderTypes[OrderTypes["Limit"] = 2] = "Limit";
    OrderTypes[OrderTypes["Stop"] = 3] = "Stop";
    OrderTypes[OrderTypes["StopLimit"] = 4] = "StopLimit";
})(exports.OrderTypes || (exports.OrderTypes = {}));
var OrderTypes = exports.OrderTypes;
(function (OrderExpirationTypes) {
    OrderExpirationTypes[OrderExpirationTypes["Day"] = 1] = "Day";
    OrderExpirationTypes[OrderExpirationTypes["DayExt"] = 2] = "DayExt";
    OrderExpirationTypes[OrderExpirationTypes["GTC"] = 3] = "GTC";
})(exports.OrderExpirationTypes || (exports.OrderExpirationTypes = {}));
var OrderExpirationTypes = exports.OrderExpirationTypes;
