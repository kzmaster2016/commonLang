
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let numSet = new Set(nums);
    let longestStreak = 0;
    let cnt = 0;
    for (let num of numSet) {
        //没有比当前数字小1的数字，说明是一个序列的开始，
        if (!numSet.has(num - 1)) { // only start counting if 'num' is the start of a sequence
            let currentNum = num;
            let currentStreak = 1;
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
                cnt++;
            }
            longestStreak = Math.max(longestStreak, currentStreak);
        }else{
            cnt++;
        }
    }
    console.log(cnt);
    return longestStreak;
};

//test
console.log(longestConsecutive([100, 4, 200, 1, 3, 2,5,6,7,7,8,9]));