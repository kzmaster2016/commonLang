let words = `
天地风雷 水火山泽 
天地 
`;// 去掉空格
words = words.replace(/\s+/g, "");
//去除标点符号
words = words.replace(/^[\u4e00-\u9fa5]/g, "");

console.log(words, words.length);

//分割为数组
let wordsArray = words.split("");
console.log(wordsArray, wordsArray.length);

//找出重复的字符
let repeatWords = wordsArray.filter((item, index) => wordsArray.indexOf(item) !== index);
console.log(repeatWords, repeatWords.length);

//wordsArray去重
let uniqueWords = [...new Set(wordsArray)];
console.log(uniqueWords, uniqueWords.length);