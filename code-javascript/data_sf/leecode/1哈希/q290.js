/**
给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。

这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 s 中的每个非空单词之间存在着双向连接的对应规律。具体来说：

pattern 中的每个字母都 恰好 映射到 s 中的一个唯一单词。
s 中的每个唯一单词都 恰好 映射到 pattern 中的一个字母。
没有两个字母映射到同一个单词，也没有两个单词映射到同一个字母。
 */
var wordPattern = function(pattern, s) {
    const words = s.split(' ');
    if (pattern.length !== words.length) return false;
    const map1 = new Map();
    const map2 = new Map();
    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];
        if (map1.has(char)) {
            if (map1.get(char) !== word) {
                return false;
            }

        } else {
            map1.set(char, word);
        }
        if (map2.has(word)) {
            if (map2.get(word) !== char) {
                return false;
            }


        } else {
            map2.set(word, char);
        }   
    }
    return true;
}