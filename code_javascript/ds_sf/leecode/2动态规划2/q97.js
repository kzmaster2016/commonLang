/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    let m = s1.length;
    let n = s2.length;

    // 长度不相等直接false
    if (m + n !== s3.length) return false;

    // dp[i][j]：s1前i个 + s2前j个 能否组成 s3前i+j个
    let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));

    // 基础：空+空=空
    dp[0][0] = true;

    // 初始化：只用s1
    for (let i = 1; i <= m; i++) {
        dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1];
    }

    // 初始化：只用s2
    for (let j = 1; j <= n; j++) {
        dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1];
    }

    // 遍历顺序：从上到下、从左到右（和编辑距离完全一样！）
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // 从上面来（取s1）
            let fromTop = dp[i - 1][j] && s1[i - 1] === s3[i + j - 1];
            // 从左边来（取s2）
            let fromLeft = dp[i][j - 1] && s2[j - 1] === s3[i + j - 1];
            
            dp[i][j] = fromTop || fromLeft;
        }
    }

    return dp[m][n];
};