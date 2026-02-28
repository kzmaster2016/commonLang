/**
 * 
位1的个数

给定一个正整数 n，编写一个函数，获取一个正整数的二进制形式并返回其二进制表达式中 设置位 的个数（也被称为汉明重量）。

 
 * 纯技巧
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    while (n !== 0) {
        n = n & (n - 1);
        count++;
    }
    return count;
};

//综合最好
function hammingWeight2(n) {
    let count = 0; // 初始化计数器，记录1的个数
    // 循环32次：遍历32位有符号整数的每一位
    for (let i = 0; i < 32; i++) {
        // 提取当前最低位：n & 1 结果为1表示最低位是1，0则是0
        if (n & 1) {
            count++;
        }
        // 右移1位：让次低位变成新的最低位，继续检查
        n = n >> 1;
    }
    return count;
};

//笨方法
var hammingWeightDiy = function(n) {
   
    //转二进制字符创
    let str = n.toString(2);
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '1') {
            count++;
        }
    }
    return count;
};