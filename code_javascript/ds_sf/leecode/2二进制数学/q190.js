/**
 * 颠倒二进制位
颠倒给定的 32 位有符号整数的二进制位。
 */
/**
 * 负数的表示： 符号位 + （绝对值 -1、取反~n）
 * 获取负数的绝对值： 取反~n + 1
 例如：-3 的二进制表示为 11111111111111111111111111111101

 */

/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        result = (result << 1) + (n & 1);//提取原数的最低位（通过 n & 1 实现），并加到结果中。

        //右移一位
        n = n >> 1;
        //打印二进制表示
        console.log(result.toString(2),n.toString(2));
    }
    return result;
};

// 整数	二进制
// 43261596	0000 0010 1001 0100 0001 1110 1001 1100
// 964176192	00111001011110000010100101000000


console.log(reverseBits(43261596));

// let n = 8;//10进制
// let n0 = 0b1000;//2进制
// let n1 = 0o10;//8进制
// let n2 = 0x8;//16进制

// console.log(n0,n, n1, n2, n === n2);

