 //
// 136. 只出现一次的数字
// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
// 
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }
    return result;
};

//不满足算法复杂度要求
var singleNumberDiy = function (nums) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }
    }

    console.log(map);

    for (let k in map) {
        if (map[k] == 1) {
            return k;
        }
    }
 
};

// // 测试用例
const testCases = [[4, 1, 2, 1, 2], [2, 2, 1], [1]];
testCases.forEach(caseNum => {
    console.log(`JavaScript → 数组 ${caseNum} 中只出现一次的数字：${singleNumber(caseNum)}`);
});
