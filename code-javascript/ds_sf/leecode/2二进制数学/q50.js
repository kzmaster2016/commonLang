/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n === 0) return 1;
    // 特殊情况2：x=1，任何次幂都是1
    if (x === 1) return 1;
    // 特殊情况3：x=0，0的正数次幂是0，负数次幂是Infinity
    if (x === 0) return n > 0 ? 0 : Infinity;

    // 处理n为负数的情况：x^n = 1 / x^(-n)
    let isNegative = n < 0;
    // 处理n=-2^31的溢出问题（JS中Number范围限制）
    let absN = isNegative ? -n : n;
    // 注意：JS中-(-2147483648)会溢出，所以用Math.abs更安全
    absN = Math.abs(n);

    let result = 1;
    let base = x; // 当前底数

    while (absN > 0) {
        // 如果当前幂次的二进制最后一位是1，将结果乘以当前底数
        if (absN % 2 === 1) {
            result *= base;
        }
        // 底数平方（对应二进制幂次左移一位）
        base *= base;
        // 幂次折半（舍去二进制最后一位）
        absN = Math.floor(absN / 2);
    }

    // 若原n为负数，返回倒数
    return isNegative ? 1 / result : result;
};