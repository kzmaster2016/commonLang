/*
153. 寻找旋转排序数组中的最小值

已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组。例如，原数组 nums = [0,1,2,4,5,6,7] 在变化后可能得到：
若旋转 4 次，则可以得到 [4,5,6,7,0,1,2],[6,7,0,1,2,4,5]
若旋转 7 次，则可以得到 [0,1,2,4,5,6,7]
注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。

给你一个元素值 互不相同 的数组 nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 最小元素 。

你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    let min = nums[0];

    // 二分查找核心循环：区间不为空时继续
    while (left <= right) {
        // 计算中间下标（用位运算避免溢出，等价于Math.floor((left+right)/2)）
        const mid = (left + right) >> 1;

        // 第一步：判断左半区间 [left, mid] 是否有序（无重复，所以用<=）
        if (nums[left] <= nums[mid]) {
            console.log('左半有序');
            // 更新最小值
            min = Math.min(min, nums[left]);

            // target不在左半，缩小左边界
            left = mid + 1;

        } else {
            min = Math.min(min, nums[mid]);

            // target不在左半，缩小左边界
            right = mid - 1;
        }
    }

    // 循环结束未找到，返回-1
    return min;
};