/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const syms = [
        "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"
    ];
    let romanNumeral = '';
    for (let i = 0; i < val.length; i++) {
        while (num >= val[i]) {
            num -= val[i];
            romanNumeral += syms[i];
        }
    }
    return romanNumeral;
};

var intToRomanDiy = function(num) {
    const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const syms = [
        "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"
    ];
    let romanNumeral = '';

     
    //除法求余
    for (let i = 0; i < val.length; i++) {
        //商
        const count = Math.floor(num / val[i]);
        for (let j = 0; j < count; j++) {
            romanNumeral += syms[i];
        }
        //余数
        num = num % val[i];
    }
    return romanNumeral;
};