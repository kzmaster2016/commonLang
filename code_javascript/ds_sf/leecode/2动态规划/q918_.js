/**
 * 这个题目未完全理解，需要理解局部和整体的关系
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let totalSum = 0;
    let maxSum = -Infinity;
    let minSum = Infinity;
    let currentMax = 0;
    let currentMin = 0;
    for (let i = 0; i < nums.length; i++) {
        totalSum += nums[i];
        currentMax = Math.max(currentMax + nums[i], nums[i]);
        currentMin = Math.min(currentMin + nums[i], nums[i]);
        maxSum = Math.max(maxSum, currentMax);
        minSum = Math.min(minSum, currentMin);
    }

    //中间 和跨界 两者之间的关系
    return maxSum > 0 ? Math.max(maxSum, totalSum - minSum) : maxSum;
};