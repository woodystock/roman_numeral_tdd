const { numberToRomanNumeral, romanNumeralToNumber } = require("./romanNumerals");

test.each([
    [1, "I"],
    [2,"II"],
    [5, "V"],
    [7, "VII"],
    [10, "X"],
    [15,"XV"],
    [20,"XX"],
    [28,"XXVIII"]
  ])('%i => %s', (num, numeral) => {
    const result = numberToRomanNumeral(num);
    expect(result).toBe(numeral);
  });