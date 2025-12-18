/**
给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
你可以假设数组是非空的，并且给定的数组总是存在多数元素。

示例 1：
输入：nums = [3,2,3]
输出：3
示例 2：

输入：nums = [2,2,1,1,1,2,2]
输出：2
*/

/**
 * hash方法
 * 排序法：排序，取中间的元素
 * 投票算法：时间O(n)，空间O(1)
 */

var majorityElement = function(nums) {
    let candidate = null;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
};

//测试用例
const nums = [2,2,1,1,1,2,2];
const result = majorityElement(nums);
console.log(result); // 输出: 2 