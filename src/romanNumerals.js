
    const romanNumerals = {
        "I":    1,
        "IV":   4,
        "V":    5,
        "IX":   9,
        "X":    10,
        "XL":   40,
        "L":    50,
        "XC":   90,
        "C":    100,
        "CD":   400,
        "D":    500,
        "CM":   900,
        "M":    1000
    };

// a function to convert a number into a roman numeral
const numberToRomanNumeral = num => {
    if(!Number.isInteger(num))  throw new Error("num (as integer) is required")

    romanNumeralsOrder = Object.entries(romanNumerals);
    
    let romanStr = "";
    let base = romanNumeralsOrder.length - 1;

    while (num > 0)
    {
        if(num >= romanNumeralsOrder[base][1])
        {
            romanStr += romanNumeralsOrder[base][0];
            num -= romanNumeralsOrder[base][1];
        }
        else{
            base -= 1;
        }
    }

    return romanStr;
}

// a function to convert a roman numeral string into a number
const romanNumeralToNumber = romanNumeralStr => {
    if(! romanNumeralStr ) throw new Error("romanNumeralStr (as string) is required")

    romanNumeralsOrder = Object.entries(romanNumerals);

    let base = romanNumeralsOrder.length - 1;
    let sum = 0;


    while(base >= 0) {
        const currentNumeral = romanNumeralsOrder[base][0];
        if(romanNumeralStr.startsWith(currentNumeral)) {
            sum += romanNumerals[currentNumeral];
            romanNumeralStr = romanNumeralStr.slice(currentNumeral.length)
        }
        else
            base -= 1;
    }

    if(romanNumeralStr.length > 0 ) throw new Error("invalid roman numeral");
    
    return sum;
}

module.exports = {
    numberToRomanNumeral,
    romanNumeralToNumber
}