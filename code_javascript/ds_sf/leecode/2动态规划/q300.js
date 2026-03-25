/**
 * 最长递增子序列
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let dp = new Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
        //j从0开始，是因为可以跳跃的全局依赖：例如 4, 3, 2, 1, 5，
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    console.log(dp);
    return Math.max(...dp);
};