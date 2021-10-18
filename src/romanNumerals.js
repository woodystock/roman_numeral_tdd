
const romanNumeralsOrder = [
    {numeral:"I", value: 1},
    {numeral:"IV", value: 4},
    {numeral:"V", value: 5},
    {numeral:"IX", value: 9},
    {numeral:"X", value: 10},
    {numeral:"XL", value: 40},
    {numeral:"L", value: 50},
    {numeral:"XC", value: 90},
    {numeral:"C", value: 100},
    {numeral:"CD", value: 400},
    {numeral:"D", value: 500},
    {numeral:"CM", value: 900},
    {numeral:"M", value: 1000}
];

// a function to convert a number into a roman numeral
const numberToRomanNumeral = num => {
    if(!Number.isInteger(num))  throw new Error("num (as integer) is required")
    
    let base = romanNumeralsOrder.length - 1;
    let romanStr = "";

    while (num > 0) {
        if(num >= romanNumeralsOrder[base].value) {
            romanStr += romanNumeralsOrder[base].numeral;
            num -= romanNumeralsOrder[base].value;
        }
        else
            base -= 1;
    }

    return romanStr;
}

// a function to convert a roman numeral string into a number
const romanNumeralToNumber = romanNumeralStr => {
    if(! romanNumeralStr ) throw new Error("romanNumeralStr (as string) is required")

    let base = romanNumeralsOrder.length - 1;
    let sum = 0;


    while(base >= 0) {
        const currentNumeral = romanNumeralsOrder[base].numeral;
        if(romanNumeralStr.startsWith(currentNumeral)) {
            sum += romanNumeralsOrder[base].value;
            romanNumeralStr = romanNumeralStr.slice(currentNumeral.length)
        }
        else
            base -= 1;
    }


    if(romanNumeralStr.length ) throw new Error("invalid roman numeral");
    
    return sum;
}

module.exports = {
    numberToRomanNumeral,
    romanNumeralToNumber
}