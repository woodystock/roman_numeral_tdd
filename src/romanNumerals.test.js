const { numberToRomanNumeral, romanNumeralToNumber } = require("./romanNumerals");

test("num 1 gives us I", () =>{
    //arrange
    const num = 1;

    //action
    const numeral = numberToRomanNumeral(num);

    //assert
    expect(numeral).toBe("I");
})

test("num 2 gives us II", () =>{
    //arrange
    const num = 2;

    //action
    const numeral = numberToRomanNumeral(num);

    //assert
    expect(numeral).toBe("II");
})

test("num 5 gives us V", () =>{
    //arrange
    const num = 5;

    //action
    const numeral = numberToRomanNumeral(num);

    //assert
    expect(numeral).toBe("V");
})

test("num 7 gives us VII", () =>{
    //arrange
    const num = 7;

    //action
    const numeral = numberToRomanNumeral(num);

    //assert
    expect(numeral).toBe("VII");
})

test("num 10 gives us X", () =>{
    //arrange
    const num = 10;

    //action
    const numeral = numberToRomanNumeral(num);

    //assert
    expect(numeral).toBe("X");
})

test("num 15 gives us XV", () =>{
    //arrange
    const num = 15;

    //action
    const numeral = numberToRomanNumeral(num);

    //assert
    expect(numeral).toBe("XV");
})

test("num 20 gives us XX", () =>{
    //arrange
    const num = 15;

    //action
    const numeral = numberToRomanNumeral(num);

    //assert
    expect(numeral).toBe("XV");
})

test("num 32 gives us XXXII", () =>{
    //arrange
    const num = 32;

    //action
    const numeral = numberToRomanNumeral(num);

    //assert
    expect(numeral).toBe("XXXII");
})

test("num 28 gives us XXVIII", () =>{
    //arrange
    const num = 28;

    //action
    const numeral = numberToRomanNumeral(num);

    //assert
    expect(numeral).toBe("XXVIII");
})