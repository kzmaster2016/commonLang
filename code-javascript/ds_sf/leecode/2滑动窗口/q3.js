/**
3. 无重复字符的最长子串
给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串 的长度。
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let maxLength = 0;
    const charIndexMap = new Map();
    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];
        if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= left) {
            left = charIndexMap.get(currentChar) + 1;
        }
        charIndexMap.set(currentChar, right);//map下标更新了
        maxLength = Math.max(maxLength, right - left + 1);
        console.log(charIndexMap, left, right, maxLength);
    }   
    return maxLength;
};

// 示例 1：
console.log(lengthOfLongestSubstring("abcabcbb"));
// 输出：3 
// 解释：因为无重复字符的最长子串是 "abc"，所以其长度为 3。
