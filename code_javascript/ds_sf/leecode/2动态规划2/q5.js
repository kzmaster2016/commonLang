/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let n = s.length;
    if (n === 0) return "";
    // dp[i][j]：s[i..j]是否是回文串
    let dp = Array.from({ length: n }, () => Array(n).fill(false));
    let start = 0, maxLen = 1;
    // 初始化：单个字符是回文串
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }
    // 遍历顺序：从上到下、从左到右（和编辑距离完全一样！）
    for (let i = n - 2; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            if (s[i] === s[j]) {
                if (j - i < 3) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = dp[i + 1][j - 1];
                }
                if (dp[i][j] && j - i + 1 > maxLen) {
                    start = i;
                    maxLen = j - i + 1;
                }
            }
        }
    }
    return s.substr(start, maxLen);
};
//双指针+中心扩散
var longestPalindrome = function(s) {
    let n = s.length;
    if (n === 0) return "";
    let start = 0, maxLen = 1;  
    for (let i = 0; i < n; i++) {
        // 奇数长度回文串
        let left = i, right = i;    
        while (left >= 0 && right < n && s[left] === s[right]) {
            if (right - left + 1 > maxLen) {
                start = left;
                maxLen = right - left + 1;
            }
            left--;
            right++;
        }
        // 偶数长度回文串
        left = i, right = i + 1;
        while (left >= 0 && right < n && s[left] === s[right]) {
            if (right - left + 1 > maxLen) {
                start = left;
                maxLen = right - left + 1;
            }
            left--;
            right++;
        }
    }
    return s.substr(start, maxLen);
};