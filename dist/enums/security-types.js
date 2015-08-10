(function (SecurityType) {
    SecurityType[SecurityType["Stock"] = 1] = "Stock";
    SecurityType[SecurityType["Bond"] = 2] = "Bond";
    SecurityType[SecurityType["Futures"] = 3] = "Futures";
    SecurityType[SecurityType["Option"] = 4] = "Option";
    SecurityType[SecurityType["Indexes"] = 5] = "Indexes";
    SecurityType[SecurityType["Money"] = 6] = "Money";
    SecurityType[SecurityType["Night"] = 7] = "Night";
})(exports.SecurityType || (exports.SecurityType = {}));
var SecurityType = exports.SecurityType;
(function (SecurityKind) {
    SecurityKind[SecurityKind["Common"] = 1] = "Common";
    SecurityKind[SecurityKind["Pref"] = 2] = "Pref";
    SecurityKind[SecurityKind["Percent"] = 3] = "Percent";
    SecurityKind[SecurityKind["Discount"] = 4] = "Discount";
    SecurityKind[SecurityKind["Delivery"] = 5] = "Delivery";
    SecurityKind[SecurityKind["Rated"] = 6] = "Rated";
    SecurityKind[SecurityKind["Interval"] = 7] = "Interval";
    SecurityKind[SecurityKind["Crypto"] = 8] = "Crypto";
})(exports.SecurityKind || (exports.SecurityKind = {}));
var SecurityKind = exports.SecurityKind;
