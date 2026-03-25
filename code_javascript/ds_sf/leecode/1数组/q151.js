
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // 去除多余空格并分割字符串
    const words = s.trim().split(/\s+/);
    // 反转单词数组并连接成字符串
    return words.reverse().join(' ');   
};

var reverseWordsDiy = function(s) {
    // 空格并分割字符串
    const words = [];
    let word = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ') {
            word += s[i];
        } else {
            if (word !== '') {
                words.push(word);
                word = '';
            }
        }
    }
    if (word !== '') {
        words.push(word);
    }
    // // 反转单词数组，原生方式
    // const reversedWords = [];
    // for (let i = words.length - 1; i >= 0; i--) {
    //     reversedWords.push(words[i]);
    // }

    //拼接字符串，原生方式
    let result = '';
    for (let i = words.length - 1; i >= 0; i--) {
        result += words[i];
        if (i !== 0) {
            result += ' ';
        }
    }
    return result;
};