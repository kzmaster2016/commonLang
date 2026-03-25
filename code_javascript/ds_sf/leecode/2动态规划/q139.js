/**
 * 单词拆分：给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。

注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。

 

示例 1：
输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。

示例 2：
输入: s = "applepenapple", wordDict = ["apple", "pen"]
输出: true
解释: 返回 true 因为 "applepenapple" 可以由 "apple" "pen" "apple" 拼接成。

示例 3：
输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
输出: false

 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let dp = new Array(s.length + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= s.length; i++) {
        for (let word of wordDict) {
            //存在局部匹配，并且之前的字符串可以被拆分
            if (i >= word.length && s.substring(i - word.length, i) === word) {
                dp[i] = dp[i] || dp[i - word.length];//如果另一个不同长度的单词也能匹配成功 dp[i],可能会被覆盖，所以需要保留之前的结果

                
            }
        }
    }
    return dp[s.length];
    
};

var wordBreakGPT = function(s, wordDict) {
    const wordSet = new Set(wordDict);
    const n = s.length;

    const dp = new Array(n + 1).fill(false);
    dp[0] = true;  // 空字符串可以被拆分

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordSet.has(s.slice(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[n];
    
};