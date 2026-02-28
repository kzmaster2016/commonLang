/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * 
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

 

示例 1：
输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6]

示例 2：
输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。

示例 3：
输入：intervals = [[4,7],[1,4]]
输出：[[1,7]]
解释：区间 [1,4] 和 [4,7] 可被视为重叠区间。
 */

var mergeDIY = function (intervals = []) {
    if (intervals.length === 0) {
        return [];
    }

    let res = [];
    for (let i = 0; i < intervals.length; i++) {
        const child = intervals[i];

        if (res.length === 0) {
            res.push(child);
        } else {
            res = literate(res, child);
        }
        // res.forEach(element => {
        //     console.log(...element);
        // });
    }

    function literate(res = [], cur = []) {
        let need_push = true;
        for (let i = 0; i < res.length; i++) {
            const element = res[i];
            // console.log(element);
            //不在当前 区间内，保留往下走
            if (cur[0] > element[1] || cur[1] < element[0]) {
                continue;
            }
            //被包在里面了
            if (cur[0] >= element[0] && cur[1] <= element[1]) {
                need_push = false;
                 continue;
            }

            //把别人包在里面了
            if (cur[0] <= element[0] && cur[1] >= element[1]) {
                console.log(1111,need_push);
                res[i] = null;
                //有可能继续包别人
                continue;
            } 

            // 需要嵌入进去，并且需要连接上下两个区间,
            // 后面的区间甚至可能覆盖前面所有区间
            // 因为遍历顺序的原因，可以保证res的子区间是不相连的

            //扩展区间或合并区间
            if (cur[0] < element[0]) {
                res[i] = null;
                cur[1] = element[1];
            }
            if (cur[1] > element[1]) {
                res[i] = null;
                cur[0] = element[0];
            }
        }
        if (need_push) {
            console.log(cur);
            res.push(cur);
        }
        //过滤 null 区间
        res = res.filter((v) => {
            return !(v === null);
        });



        return res;
    }

    
    return res;
};


//标准答案
var merge = function(intervals) {
    // 1. 处理边界情况：空数组直接返回
    if (intervals.length === 0) {
        return [];
    }

    // 2. 关键步骤：按区间的起始位置进行升序排序
    // 排序后保证了后续只需依次遍历，无需回头检查已合并区间
    intervals.sort((a, b) => a[0] - b[0]);

    // 3. 初始化结果数组，先放入排序后的第一个区间
    const merged = [intervals[0]];

    // 4. 遍历排序后的剩余区间，依次进行合并判断
    for (let i = 1; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        // 获取结果数组中最后一个已合并的区间（核心：只需对比最后一个即可）
        const lastMergedInterval = merged[merged.length - 1];

        // 5. 判断是否重叠：当前区间的起始 <= 最后一个合并区间的结束
        if (currentInterval[0] <= lastMergedInterval[1]) {
            // 存在重叠，合并区间：更新最后一个区间的结束值为两者最大值
            // 覆盖「部分重叠」和「完全包含」两种场景
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
        } else {
            // 无重叠，直接将当前区间加入结果数组
            merged.push(currentInterval);
        }
    }

    return merged;
};

// console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));
console.log(merge([[1,4],[0,5]]));