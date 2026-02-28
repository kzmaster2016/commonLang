/**
 * 找出和为target的所有不同组合（元素可无限制重复选取）
 * @param {number[]} candidates - 无重复元素的整数数组
 * @param {number} target - 目标和
 * @returns {number[][]} 所有满足条件的组合
 */
function combinationSum(candidates, target) {
    const result = []; // 存储最终满足条件的组合

    /**
     * 回溯辅助函数
     * @param {number[]} current - 当前构建的组合（半成品）
     * @param {number} currentSum - 当前组合的和
     * @param {number} startIndex - 起始遍历索引（避免重复组合）
     */
    function backtrack(current, currentSum, startIndex) {
        // 递归终止条件1：当前和等于目标值，收集结果
        if (currentSum === target) {
            result.push([...current]); // 深拷贝，避免后续修改影响结果
            return;
        }

        // 剪枝条件：当前和超过目标值，无需继续递归（无效分支直接终止）
        if (currentSum > target) {
            return;
        }

        // 遍历候选数组，从startIndex开始（关键：避免重复组合）
        for (let i = startIndex; i < candidates.length; i++) {
            const num = candidates[i];
            // 1. 尝试：将当前数字加入组合，更新当前和
            current.push(num);
            // 2. 递归：由于可重复选取，下一轮仍从i开始（而非i+1）
            backtrack(current, currentSum + num, i);
            // 3. 回溯：撤销选择，移除最后一个加入的数字，恢复状态
            current.pop();
        }
    }

    // 初始调用：空组合、当前和为0、起始索引为0
    backtrack([], 0, 0);
    return result;
}