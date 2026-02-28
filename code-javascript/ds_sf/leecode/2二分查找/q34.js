/**
 * 在排序数组中查找元素的第一个和最后一个位置
给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
如果数组中不存在目标值 target，返回 [-1, -1]。

你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

示例 1：

输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
示例 2：

输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
示例 3：

输入：nums = [], target = 0
输出：[-1,-1]
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = 0, right = nums.length - 1;
    let first = -1, last = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            first = mid;
            last = mid;
            while (first > 0 && nums[first - 1] === target) first--;
            while (last < nums.length - 1 && nums[last + 1] === target) last++;
            break;
        } else if (nums[mid] > target) right = mid - 1;
        else left = mid + 1;
    }
    return [first, last];
};
// 第二种   方式：滑动窗口
var searchRange2 = function(nums, target) {
    let first = -1, last = -1;  
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            if (first === -1) first = i;
            last = i;
        }
    }
    if (first !== -1) {
        return [first, last];
    } else {
        return [-1, -1];
    }
     
};