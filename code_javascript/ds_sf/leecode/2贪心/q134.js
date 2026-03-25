/**
 * 在一条环路上有 n 个加油站，其中第 i 个加油站有汽油 gas[i] 升。
你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。
给定两个整数数组 gas 和 cost ，如果你可以按顺序绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1 。如果存在解，则 保证 它是 唯一 的。
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

// 贪心解法
function canCompleteCircuit(gas, cost) {
    let totalGas = 0;
    let start = 0;
    let currentGas = 0;
    for (let i = 0; i < gas.length; i++) {
        currentGas += gas[i] - cost[i];
        totalGas += gas[i] - cost[i];
        if (currentGas < 0) {
            start = i + 1;
            currentGas = 0;
        }
    }
    if (totalGas < 0) return -1;
    return start;
};
4


//暴力解法
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function canCompleteCircuit2(gas, cost) {
    let totalGas = 0;
    let totalCost = 0;
    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
    }
    if (totalGas < totalCost) return -1;

    let start = 0;
    let currentGas = 0;
    let totalSteps = 0;
    for (let i = 0; i < gas.length; ) {
        start = i;
        while (totalSteps < gas.length) {
            console.log(start,i,  currentGas,  totalSteps,gas[i] , cost[i]);
            if (i === gas.length) i = 0;

            currentGas += gas[i] - cost[i];
            
            console.log(currentGas);
            if (currentGas < 0) {
                //下一个位置开始
                totalSteps = 0;
                currentGas = 0;
                i= start + 1;
                break;
            }else{
                totalSteps++;
                i++;
            }

            if (totalSteps === gas.length) {
                return start;
            }
            await sleep(200);
        }
    }
    return -1;
};



// 测试
// const gas = [1, 2, 3, 4, 5];
// const cost = [3, 4, 5, 1, 2];
// canCompleteCircuit(gas, cost).then(res => console.log(res)); // 输出: 3

const gas2 = [5,1,2,3,4];
const cost2 = [4,4,1,5,1];
canCompleteCircuit2(gas2, cost2).then(res => console.log(res)); // 输出: 4