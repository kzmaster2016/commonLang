/**
 * 找一笔交易所需的最少的硬币数目
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let dp = new Array(amount + 1).fill(false);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        //coin可以重复使用，所以内层循环在外层循环的基础上进行
        for (let coin of coins) {
            if (i >= coin && dp[i - coin] !== false) {
                dp[i] = dp[i] === false ? dp[i - coin] + 1 : Math.min(dp[i], dp[i - coin] + 1);
            }   
        }
    }
    return dp[amount] === false ? -1 : dp[amount];
};

var coinChange2 = function (coins, amount) {
    let dp = new Array(amount + 1).fill(false);
    dp[0] = 0;
    //coin可以重复使用，所以内层循环在外层循环的基础上进行
    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            if (dp[i - coin] !== false) {
                dp[i] = dp[i] === false ? dp[i - coin] + 1 : Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    return dp[amount] === false ? -1 : dp[amount];
};