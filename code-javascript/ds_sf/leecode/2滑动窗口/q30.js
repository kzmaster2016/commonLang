/**
串联所有单词的子串
给定一个字符串 s 和一个字符串数组 words。 words 中所有字符串 长度相同。
s 中的 串联子串 是指一个包含  words 中所有字符串以任意顺序排列连接起来的子串。

例如，如果 words = ["ab","cd","ef"]， 那么 "abcdef"， "abefcd"，"cdabef"， "cdefab"，"efabcd"， 和 "efcdab" 都是串联子串。 "acdbef" 不是串联子串，因为他不是任何 words 排列的连接。
返回所有串联子串在 s 中的开始索引。你可以以 任意顺序 返回答案。
 */
var findSubstring = function(s, words) {
    const wordLen = words[0].length;
    const wordCount = words.length;
    const substringSize = wordLen * wordCount;
    const n = s.length;
    const indices = [];
    const wordFreq = new Map();
    for (const word of words) {
        wordFreq.set(word, (wordFreq.get(word) || 0) + 1);
    }
    for (let i = 0; i <= n - substringSize; i++) {
        const seenWords = new Map();
        for (let j = 0; j < wordCount; j++) {
            const wordIndex = i + j * wordLen;
            const word = s.substring(wordIndex, wordIndex + wordLen);
            if (!wordFreq.has(word)) {
                break;
            }   
            seenWords.set(word, (seenWords.get(word) || 0) + 1);
            if (seenWords.get(word) > wordFreq.get(word)) {
                break;
            }
            if (j + 1 === wordCount) {
                indices.push(i);
            }

        }


    }
    return indices;
}

// 示例 1：
console.log(findSubstring("barfoothefoobarman", ["foo","bar"]));
// 输出：[0,9]
// 解释：子串从索引 0 和 9 开始。"barfoo" 和 "foobar" 都是 words 的排列。
// 示例 2：
console.log(findSubstring("wordgoodgoodgoodbestword", ["word","good","best","word"]));
// 输出：[]
// 示例 3：
console.log(findSubstring("barfoofoobarthefoobarman", ["bar","foo","the"]));
// 输出：[6,9,12]
// 解释：子串从索引 6，9 和 12 开始。
