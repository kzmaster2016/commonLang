/**
 * 只出现一次的数字 II
给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。

你必须设计并实现线性时间复杂度的算法且使用常数级空间来解决此问题。
 */

/**
 * 标准通用解法：整数的每一位二进制位是独立的
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let result = 0;
    for (let i = 0; i < 32; i++) {
        let bitSum = 0;
        //循环每一个数字的第 i 位
        for (let j = 0; j < nums.length; j++) {
            bitSum += (nums[j] >> i) & 1;
        }
        if (bitSum % 3 !== 0) {
            result |= (1 << i);//将 1 左移 i 位，还原到第 i 位的位置
        }
    }

    return result;
};

var singleNumber2 = function(nums) {
    let ones = 0, twos = 0;
    for (let num of nums) {
        ones = (ones ^ num) & ~twos;
        twos = (twos ^ num) & ~ones;
    }
    return ones;
};