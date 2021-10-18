
// a function to convert a number into a roman numeral
const numberToRomanNumeral = num => {
    if(!Number.isInteger(num))  throw new Error("num (as integer) is required")

    const romanNumeralsOrder = [[1000,"M"],[500,"D"],[100,"C"],[50,"L"],[10,"X"],[5,"V"],[1,"I"]];
    
    let romanStr = "";
    let index = 0;

    while (index < romanNumeralsOrder.length)
    {
        if(num >= romanNumeralsOrder[index][0])
        {
            romanStr += romanNumeralsOrder[index][1];
            num -= romanNumeralsOrder[index][0];
        }
        else{
            index++;
        }
    }

    return romanStr;
}

// a function to convert a roman numeral string into a number
const romanNumeralToNumber = romanNumeralStr => {
    if(! romanNumeralStr ) throw new Error("romanNumeralStr (as string) is required")


}

module.exports = {
    numberToRomanNumeral,
    romanNumeralToNumber
}