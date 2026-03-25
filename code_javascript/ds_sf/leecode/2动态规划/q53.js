/**
 * 最大子数组和
给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
子数组是数组中的一个连续部分。

 * kadanes算法：
求数组的最大子数组和：本质的是动态规划+贪心算法
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let dp = new Array(nums.length);
    dp[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        //状态转移方程：dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);//可以舍弃前面为负数的部分，重新开始计算最大子数组和
    }
    return Math.max(...dp);
};

var maxSubArrayGPT = function(nums) {
    let maxSum = nums[0];
    let current = nums[0];

    for (let i = 1; i < nums.length; i++) {
        current = Math.max(nums[i], current + nums[i]);
        maxSum = Math.max(maxSum, current);
    }

    return maxSum;
};