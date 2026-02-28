/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let a = 0,
        b = 1,
        sum = 0;
    for (let i = 2; i <= n; i++) {
        sum = a + b;
        a = b;
        b = sum;
    }
    return sum;
};