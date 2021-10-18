const { numberToRomanNumeral, romanNumeralToNumber } = require("./romanNumerals");

test.each([
    [1, "I"],
    [2,"II"],
    [5, "V"],
    [7, "VII"],
    [10, "X"],
    [15,"XV"],
    [20,"XX"],
    [28,"XXVIII"],
    [50,"L"],
    [88,"LXXXVIII"],
    [202,"CCII"],
    [531,"DXXXI"],
    [1010,"MX"],
    [2862,"MMDCCCLXII"],
    [4,"IV"],
    [9,"IX"],
    [40,"XL"],
    [49,"XLIX"],
    [99,"XCIX"],
    [449,"CDXLIX"],
    [1896,"MDCCCXCVI"]
])('%i => %s', (num, numeral) => {
    const result = numberToRomanNumeral(num);
    expect(result).toBe(numeral);
});

test.only.each([
    ["I",1],
    ["II",2],
    ["V",5],
    ["VII",7],
    ["X",10],
    ["XV",15],
    ["XX",20],
    ["XXVIII",28],
    ["L",50],
    ["LXXXVIII",88],
    ["CCII",202],
    ["DXXXI",531],
    ["MX",1010],
    ["MMDCCCLXII",2862],
    ["IV",4],
    ["IX",9],
    ["XL",40],
    ["XLIX",49],
    ["XCIX",99],
    ["CDXLIX",449],
    ["MDCCCXCVI",1896]

])('%s => %i', (numeral, num) => {
    const result = romanNumeralToNumber(numeral);
    expect(result).toBe(num);
});