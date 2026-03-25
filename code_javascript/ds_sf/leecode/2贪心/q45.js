/**
 * 跳跃游戏 II

给定一个长度为 n 的 0 索引整数数组 nums。初始位置在下标 0。
每个元素 nums[i] 表示从索引 i 向后跳转的最大长度。换句话说，如果你在索引 i 处，你可以跳转到任意 (i + j) 处：
0 <= j <= nums[i] 且
i + j < n
返回到达 n - 1 的最小跳跃次数。测试用例保证可以到达 n - 1。


 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    if (nums.length <= 1) return 0; // 如果数组长度为1或更小，已经在目标位置，无需跳跃

    let jumps = 0;
    for (let index = 0; index < nums.length; index++) {
        console.log('start',index, nums[index]);
        const element = nums[index];

        if (index + element >= nums.length - 1) {
            return jumps + 1; // 如果到达最后一个位置，返回当前跳跃次数
        }
        // 这里可以添加逻辑来选择最佳的跳跃位置，以确保最小跳跃次数
        let maxJump = 0;
        let maxJ = 0;
        for (let j = 1; j <= element; j++) {

            // 更新最大跳跃位置 根据当前元素和跳跃距离,nums =[9,8,2,2,0,2,2,0,4,1,5,7,9,6,6,0,6,5,0,5]

            if (nums[index + j] + j > maxJump) {
                
                maxJump = nums[index + j] + j;
                maxJ = j;
                
            }

            console.log('j',maxJ, maxJump);
        }
        jumps++;
        index += maxJ - 1; // 跳跃到最佳位置，减1是因为循环会自动增加index
        console.log('end',maxJump, index);

    }

    return jumps;
};

var jump2 = function (nums) {
    let ans = 0, curRight = 0, nextRight = 0
    for (let i = 0; i < nums.length - 1; i++) {
        nextRight = Math.max(nextRight, i + nums[i])
        console.log('i', i, 'curRight', curRight, 'nextRight', nextRight,ans);
        if (i === curRight) {
            curRight = nextRight
            ans++
        }
        console.log(ans);
    }
    return ans
};

// console.log(jump([2, 3, 1, 1, 4])); // 输出: 2
// console.log(jump([2, 3, 0, 1, 4])); // 输出: 2
console.log(jump2([9,8,2,2,0,2,2,0,4,1,5,7,9,6,6,0,6,5,0,5]));  