/**
长度最小的子数组
给定一个含有 n 个正整数的数组和一个正整数 target 。

找出该数组中满足其总和大于等于 target 的长度最小的 子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。
*/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {

    let left = 0;
    let minLength = Infinity;
    let sum = 0;
    for (let right = 0; right < nums.length;) {
        sum += nums[right];
        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left];
            left++;
        }
        right++;
    }
    return minLength === Infinity ? 0 : minLength;
};

// 示例 1：
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
// 输出：2
// 解释：子数组 [4,3] 是该条件下的长度最小的子数组。

// 示例 2：
console.log(minSubArrayLen(4, [1, 4, 4]));
// 输出：1

// 示例 3：
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
// 输出：0
