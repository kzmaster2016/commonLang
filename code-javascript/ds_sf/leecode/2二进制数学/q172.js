/**
 * 阶乘 结果尾数含多少0
 * 纯数学分析
 */
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    let count = 0;
    // 循环统计5^1,5^2,5^3...的因子个数
    while (n >= 5) {
        n = Math.floor(n / 5); // 等价于n//5（整数除法）
        count += n;
    }
    return count;
};


const testCases = [0, 1, 5, 10, 15, 20, 25, 100, 120, 125, 130, 620, 625];
testCases.forEach(n => {
    console.log(`JS → n=${n} 时，n!末尾零的数量：${trailingZeroes(n)}`);
});