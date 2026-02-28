/**
 *  加一
给定一个表示 大整数 的整数数组 digits，其中 digits[i] 是整数的第 i 位数字。这些数字按从左到右，从最高位到最低位排列。这个大整数不包含任何前导 0。

将大整数加 1，并返回结果的数字数组。
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let multi = 0;
    let len = digits.length;
    let res = [];
    for (let i = len - 1; i >= 0; i--) {
        let temp = 0;
        if (i === len - 1) {
            temp = digits[i] + 1 + multi;
        } else {
            temp = digits[i] + multi;
        }

        if (temp == 10) {
            multi = 1;
            temp = 0;
        } else {
            multi = 0;
        }
        res.unshift(temp);
    }
    if (multi === 1) {
        res.unshift(1);
    }
    return res;
};