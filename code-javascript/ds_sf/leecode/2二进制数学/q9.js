//回文数

/**
 * @param {number} x
 * @return {boolean}
 */
/**
 * 判断整数是否为回文数
 * @param {number} x 待判断的整数
 * @returns {boolean} 是否为回文数
 */
function isPalindrome(x) {
    // 特殊情况：负数 / 大于0且末位为0的数 不是回文数
    if (x < 0 || (x > 0 && x % 10 === 0)) {
        return false;
    }

    let reversedHalf = 0; // 存储反转的后半部分数字
    while (x > reversedHalf) {
        // 取出x最后一位，拼接到reversedHalf末尾
        reversedHalf = reversedHalf * 10 + x % 10;
        // 去掉x最后一位（JS需用Math.floor取整，因为/是浮点数除法）
        x = Math.floor(x / 10);
    }

    // 偶数位：x === reversedHalf；奇数位：x === Math.floor(reversedHalf / 10)
    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}

// // 测试用例
// const testCases = [121, -121, 10, 0, 1221, 12321, 123];
// testCases.forEach(caseNum => {
//     console.log(`JavaScript → 数字 ${caseNum} 是否是回文数：${isPalindrome(caseNum)}`);
// });

var isPalindrome2 = function(x) {
    //拆分为个十百千万
    let str = x.toString();
    let len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - i - 1]) {
            return false;
        }
    }
    return true;
};