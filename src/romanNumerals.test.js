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