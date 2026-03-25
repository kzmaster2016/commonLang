/**
 * LeetCode 912. 排序数组（快速排序）
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  quickSort(nums, 0, nums.length - 1);
  return nums;
};

/**
 * 原地快速排序
 * @param {number[]} arr
 * @param {number} left
 * @param {number} right
 */
function quickSort(arr, left, right) {
  if (left >= right) return;

  const pivotIndex = partition(arr, left, right);
  quickSort(arr, left, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, right);
}

/**
 * 分区：以 right 位置元素为基准
 * @param {number[]} arr
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
function partition(arr, left, right) {
  const pivot = arr[right];
  let i = left;

  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  [arr[i], arr[right]] = [arr[right], arr[i]];
  return i;
}

export { sortArray };
