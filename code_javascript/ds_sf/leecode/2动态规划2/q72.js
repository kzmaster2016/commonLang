/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let m = word1.length;
    let n = word2.length;
    let dp = new Array(m+1).fill(0).map(()=>new Array(n+1).fill(0));

    for (let j = 0; j<=n;j++){
        dp[0][j] = j;
    }
    for (let i = 0; i<=m;i++){
        dp[i][0] = i;
    }

    

    for (let i = 1; i<=m;i++){
        for (let j = 1; j<=n;j++){
            if(word1[i-1] === word2[j-1]){
                dp[i][j] = dp[i-1][j-1];
            }else{
                dp[i][j] = Math.min(
                    dp[i-1][j-1],//替换
                    dp[i][j-1],//插入; j少了一个字符，插入一个字符就和j一样了
                    dp[i-1][j]//删除; j已经到位了，不能再插入，可以解释为从i到i-1的距离,就需要删除操作；
                ) + 1;
            }
        }
    }

    return dp[m][n];
};

