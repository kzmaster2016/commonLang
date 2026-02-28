/**\
 * 189. 轮转数组
给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。


示例 1:

输入: nums = [1,2,3,4,5,6,7], k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右轮转 1 步: [7,1,2,3,4,5,6]
向右轮转 2 步: [6,7,1,2,3,4,5]
向右轮转 3 步: [5,6,7,1,2,3,4]
 */

/**
 * 
 * 1 翻转法
 * 2 额外数组：环状数组
 * 
 */

var rotate = function(nums, k) {
    const n = nums.length;
    k = k % n; // 处理 k 大于数组长度的情况
    reverse(nums, 0, n - 1); // 翻转整个数组
    reverse(nums, 0, k - 1); // 翻转前 k 个元素
    reverse(nums, k, n - 1); // 翻转后 n-k 个元素
}
function reverse(arr, start, end) {
    while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}   
//测试用例
const nums = [1,2,3,4,5,6,7];
const k = 3;
rotate(nums, k);
console.log(nums); // 输出: [5,6,7,1,2,3,4]
// 输出: [5,6,7,1,2,3,4]

// 额外数组法
var rotate2 = function(nums, k) {
    const n = nums.length;
    k = k % n;
    const rotated = new Array(n);
    for (let i = 0; i < n; i++) {
        rotated[(i + k) % n] = nums[i];
    }

    console.log(rotated);
    for (let i = 0; i < n; i++) {
        nums[i] = rotated[i];
    }
};
//测试用例
const nums2 = [1,2,3,4,5,6,7];
const k2 = 3;
rotate2(nums2, k2);
console.log(nums2); // 输出: [5,6,7,1,2,3,4]
// 输出: [5,6,7,1,2,3,4]


