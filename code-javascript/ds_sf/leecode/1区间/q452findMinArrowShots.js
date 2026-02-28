
/**
 * 用最少数量的箭引爆气球 

有一些球形气球贴在一堵用 XY 平面表示的墙面上。墙面上的气球记录在整数数组 points ，其中points[i] = [xstart, xend] 表示水平直径在 xstart 和 xend之间的气球。你不知道气球的确切 y 坐标。

一支弓箭可以沿着 x 轴从不同点 完全垂直 地射出。在坐标 x 处射出一支箭，若有一个气球的直径的开始和结束坐标为 xstart，xend， 且满足  xstart ≤ x ≤ xend，则该气球会被 引爆 。可以射出的弓箭的数量 没有限制 。 弓箭一旦被射出之后，可以无限地前进。

给你一个数组 points ，返回引爆所有气球所必须射出的 最小 弓箭数 。
 * 
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    if (points.length === 0) {
        return 0;
    }
    //先排序
    let list = points.sort((a, b) => {
        return a[1] - b[1];
    });
    console.log(list);

    //贪心算法： 大多数情况需要先排序：
    /**
     *  贪心算法保证结果有效的核心前提：问题同时具备「贪心选择性质」（局部最优引领全局最优，无后效性）和「最优子结构性质」（全局最优包含子问题局部最优）；
        常用验证方法：数学归纳法、交换论证法（更易落地）；
        关键区分：若问题缺失其中任一性质，贪心算法大概率无法得到全局最优解（如 0-1 背包问题）；若同时具备，则贪心算法能高效得到最优解（如气球射箭、活动选择等问题）。
     */
    let count = 1;
    let curPos = list[0][1];

    //从第二支箭开始遍历
    for (let index = 1; index < list.length; index++) {
        const [xstart, xend] = list[index];
        // 需要新增一支箭
        if (xstart > curPos) {
            count++;
            curPos = xend;

        }
    }
    return count;
};

// 测试示例1
const points1 = [[10,16],[2,8],[1,6],[7,12]];
console.log(findMinArrowShots(points1)); // 输出：2（解释：箭射在6和12位置，可引爆所有气球）

// 测试示例2
const points2 = [[1,2],[3,4],[5,6],[7,8]];
console.log(findMinArrowShots(points2)); // 输出：4（无重叠，每个气球需要1支箭）

// 测试示例3
const points3 = [[1,2],[2,3],[3,4],[4,5]];
console.log(findMinArrowShots(points3)); // 输出：2（箭射在2和4位置）

// 测试示例4（空数组）
const points4 = [];
console.log(findMinArrowShots(points4)); // 输出：0