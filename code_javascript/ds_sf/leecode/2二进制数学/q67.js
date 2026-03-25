/**
 * 二进制求和
给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let result = '';
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    while (i >= 0 || j >= 0 || carry) {
        const digitA = i >= 0 ? parseInt(a[i]) : 0;
        const digitB = j >= 0 ? parseInt(b[j]) : 0;
        const sum = digitA + digitB + carry;

        result = (sum % 2) + result;//求余
        carry = Math.floor(sum / 2);//求商

        i--;
        j--;
    }

    return result;
};