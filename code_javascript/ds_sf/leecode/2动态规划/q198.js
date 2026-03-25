/**
 * 打家劫舍：不能偷相邻的房子，求最大金额
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    let dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }

    // 状态转移方程：dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);和选取规则有关
    // 解释：对于第 i 个房子，我们有两种选择：
    // 1. 偷第 i 个房子，那么我们就不能偷第 i - 1 个房子，所以我们可以偷到的最大金额是 dp[i - 2] + nums[i]。
    // 2. 不偷第 i 个房子，那么我们可以偷到的最大金额就是 dp[i - 1]。
    // 因此，我们取这两种选择的最大值作为 dp[i] 的值。
    return dp[nums.length - 1];
};