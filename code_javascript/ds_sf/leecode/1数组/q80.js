// 80. 删除有序数组中的重复项 II
// 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 最多出现两次 ，返回删除后数组的新长度。
// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

//最优解
function removeDuplicates(nums) {
    const n = nums.length;
    if (n <= 2) return n;

    let i = 2; // i 指向写入位置（前 2 个必然合法）

    for (let j = 2; j < n; j++) {
        // 如果当前 nums[j] != nums[i - 2]，说明它出现次数 <= 2，可以写入，因为数组有序
        if (nums[j] !== nums[i - 2]) {
            nums[i] = nums[j];
            i++;
        }else{
            // 如果相等，说明出现次数超过 2，中间的元素全部都相等，无效数据长度不变不更新下标数据
            continue;
        }
    }
    

    return i;
}

//常规解法
var removeDuplicates2 = function(nums) {
    const arr = [];
    let count = 1;

    for (let i = 0; i < nums.length; i++) {
        // 和前一个不一样，计数重置
        if (i === 0 || nums[i] !== nums[i - 1]) {
            count = 1;
            arr.push(nums[i]);
        } else {
            // 相同元素出现次数 ≤ 2
            if (count < 2) {
                arr.push(nums[i]);
            }
            count++;
        }
    }

    // 覆盖回 nums（常规法，拷贝内容）
    for (let i = 0; i < arr.length; i++) {
        nums[i] = arr[i];
    }
    return arr.length;
};


const nums = [0, 0, 0, 1, 1, 1, 2, 3, 3];
const k = removeDuplicates2(nums);

console.log(k);            // 5
console.log(nums.slice(0, k));  // [1,1,2,2,3]
