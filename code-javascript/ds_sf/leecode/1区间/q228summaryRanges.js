/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    if (nums.length === 0) {
        return [];
    }
    let start = 0;
    let end = 0;
    let res = [];

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        //初始条件
        if (index == 0) {
            start = element;
            end = element;
            continue;
        }
        //连续的，更新end
        if (element - end > 1) {
            if (start < end) {
                res.push(start + '->' + end);
            } else {
                res.push(start+'');
            }

            start = element;

        }
        end = element;
    }
    if (start < end) {
        res.push(start + '->' + end);
    } else {
        res.push(start+'');
    }

    console.log(res, start, end);
    return res;
};

summaryRanges([0, 1, 2, 4, 5, 7]);
summaryRanges([0, 2, 3, 4, 6, 8, 9]);
// summaryRanges();