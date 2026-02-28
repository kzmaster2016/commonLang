//跳跃游戏1

/**
 * 贪心算法
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    // 特殊情况：数组只有1个元素，初始就在最后一个下标，直接返回true
    if (nums.length === 1) return true;
    
    let maxReach = 0; // 记录当前能到达的最远下标
    const lastIndex = nums.length - 1; // 最后一个下标
    
    for (let i = 0; i < nums.length; i++) {
        // 关键：如果当前位置i超出了能到达的最远范围，直接返回false
        if (i > maxReach) return false;
        
        // 更新能到达的最远下标：当前最远 vs 从i位置能跳到的最远
        maxReach = Math.max(maxReach, i + nums[i]);
        
        // 优化：如果已经能到达最后一个下标，提前返回true
        if (maxReach >= lastIndex) return true;
    }
    
    // 遍历完成（理论上不会走到这里，因为提前会返回）
    return false;
};

//动态规划

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    const n = nums.length;
    const dp = new Array(n).fill(false);
    dp[0] = true;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && nums[j] + j >= i) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[n - 1];
};