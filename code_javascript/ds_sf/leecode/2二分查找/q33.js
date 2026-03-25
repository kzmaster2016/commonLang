var search = function(nums, target) {
    // 初始化左右指针，覆盖整个数组
    let left = 0;
    let right = nums.length - 1;

    // 二分查找核心循环：区间不为空时继续
    while (left <= right) {
        // 计算中间下标（用位运算避免溢出，等价于Math.floor((left+right)/2)）
        const mid = (left + right) >> 1;

        // 找到目标值，直接返回下标
        if (nums[mid] === target) {
            return mid;
        }

        // 第一步：判断左半区间 [left, mid] 是否有序（无重复，所以用<=）
        if (nums[left] <= nums[mid]) {
            console.log('左半有序');
            // 左半区间有序：判断target是否在左半区间内
            if (nums[left] <= target && target < nums[mid]) {
                // target在左半，缩小右边界
                right = mid - 1;
            } else {
                // target不在左半，缩小左边界
                left = mid + 1;
            }
        } else {
            console.log('左半无序');
            // 左半区间无序 → 右半区间 [mid, right] 必然有序
            // 判断target是否在右半区间内
            if (nums[mid] < target && target <= nums[right]) {
                // target在右半，缩小左边界
                left = mid + 1;
            } else {
                // target不在右半，缩小右边界
                right = mid - 1;
            }
        }
    }

    // 循环结束未找到，返回-1
    return -1;
};

/**
 * 直观示例（跟踪执行过程）
以nums = [4,5,6,7,0,1,2]，target=0为例：
初始：left=0, right=6 → mid=3，nums[3]=7≠0；
左半有序（4<=7），target=0不在[4,7) → left=4；

新范围：left=4, right=6 → mid=5，nums[5]=1≠0；

左半有序 (0<1)，target=0在[0,1) → right=4；

新范围：left=4, right=4 → mid=4，nums[4]=0=target → 返回 4（正确）。
 */

console.log(search([4,5,6,7,0,1,2], 0));
// console.log(search([4,5,6,7,0,1,2], 3));