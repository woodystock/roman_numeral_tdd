
// a function to convert a number into a roman numeral
const numberToRomanNumeral = num => {
    if(!Number.isInteger(num))  throw new Error("num (as integer) is required")

    /*
        I             1
        IV            4
        V             5
        IX            9
        X             10
        XL            40
        L             50
        XC            90
        C             100
        CD            400
        D             500
        CM            900 
        M             1000  
*/

    const romanNumeralsOrder = [
        [1000,"M"],
        [900,"CM"],
        [500,"D"],
        [400,"CD"],
        [100,"C"],
        [90,"XC"],
        [50,"L"],
        [40,"XL"],
        [10,"X"],
        [9,"IX"],
        [5,"V"],
        [4,"IV"],
        [1,"I"]
    ];
    
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