/**
最后一个单词的长度
简单
相关标签
premium lock icon
相关企业
给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。

单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

 */

var lengthOfLastWordDIY = function(s) {
    //切割字符串
    let arr = s.split(' ');
    //过滤空字符串
    arr = arr.filter(item => item !== '');
    //获取最后一个字符串的长度
    return arr[arr.length - 1].length;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let end = s.length - 1;
    // 去掉末尾空格
    while (end >= 0 && s[end] === ' ') {
        end--;
    }

    let start = end;
    while (start >= 0 && s[start] !== ' ') {
        start--;
    }

    return end - start;
};