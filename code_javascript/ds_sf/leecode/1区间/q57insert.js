


function insertDIY(res = [], cur = []) {
    let need_push = true;
    for (let i = 0; i < res.length; i++) {
        const element = res[i];
        console.log(element);
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
            console.log(1111, need_push);
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

    //需要排序
    res = res.sort((a,b)=>{ 
        return a[0]-b[0];
    });


    res.forEach(element => {
        console.log(...element);
    });
    return res;
}

var insert = function(intervals, newInterval) {
    const result = [];
    let i = 0;
    const n = intervals.length;
    const [newStart, newEnd] = newInterval;

    // 1. 先添加所有在 newInterval 左侧（无重叠）的区间
    // 条件：当前区间的结束 < 新区间的起始，说明无重叠且在左侧
    while (i < n && intervals[i][1] < newStart) {
        result.push(intervals[i]);
        i++;
    }

    // 2. 合并所有与 newInterval 重叠的区间
    // 条件：当前区间的起始 <= 新区间的结束，说明存在重叠，需要合并
    let mergedStart = newStart;
    let mergedEnd = newEnd;
    while (i < n && intervals[i][0] <= mergedEnd) {
        // 合并后的起始取两者最小值，结束取两者最大值
        mergedStart = Math.min(mergedStart, intervals[i][0]);
        mergedEnd = Math.max(mergedEnd, intervals[i][1]);
        i++;
    }
    // 将合并后的区间加入结果数组
    result.push([mergedStart, mergedEnd]);

    // 3. 添加所有在 newInterval 右侧（无重叠）的区间
    // 剩余区间均满足：起始 > 合并后区间的结束，无重叠且在右侧
    while (i < n) {
        result.push(intervals[i]);
        i++;
    }

    return result;
};
console.log(insert([[1, 3], [6, 9]], [2, 5]));
// console.log(insert([[1,4],[0,5]]));