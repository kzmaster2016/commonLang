/**

给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除了 nums[i] 之外其余各元素的乘积 。
题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。
请 不要使用除法，且在 O(n) 时间复杂度内完成此题。
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // 计算前缀积
    const prefix = new Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }
    // 计算后缀积
    const suffix = new Array(nums.length).fill(1);
    for (let i = nums.length - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }
    // 计算结果
    const result = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix[i] * suffix[i];
    }
    return result;
    
};