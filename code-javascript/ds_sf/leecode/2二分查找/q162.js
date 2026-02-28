/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {

    let left = 0, right = nums.length - 1;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
};

var findPeakElement2 = function (nums) {
    if (nums.length === 0) {
        return -1;
    }
    if (nums.length === 1) {
        return 0;
    }
    if (nums.length === 2) {
        return nums[0] > nums[1] ? 0 : 1;
    }

    for (let i = 1; i < nums.length - 1; i++) {
        if (i === 1 && nums[0] > nums[1]) {
            return 0;
        }
        if (i === nums.length - 2 && nums[nums.length - 1] > nums[nums.length - 2]) {
            return nums.length - 1;
        }
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            return i;
        }
    }
    return -1;
};