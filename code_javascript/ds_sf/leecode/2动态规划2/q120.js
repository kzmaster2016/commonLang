/**
 * 给定一个三角形 triangle ，找出自顶向下的最小路径和。

每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const rows = triangle.length;
    const cols = triangle[rows-1].length;
    const dp = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
    dp[0][0] = triangle[0][0];

    for (let r = 1; r < rows; r++) {
        for (let c = 0; c < triangle[r].length; c++) {
            if (c === 0) {  // 初始化第一行
                dp[r][c] = dp[r-1][c] + triangle[r][c];
            } else if (c === r) {    // 递推
                dp[r][c] = dp[r-1][c-1] + triangle[r][c];
            } else {    // 递推
                dp[r][c] = Math.min(dp[r-1][c], dp[r-1][c-1]) + triangle[r][c];
            }
             
        }
    }
    for (let index = 0; index < dp.length; index++) {
         
        for (let j = 0; j < dp[index].length; j++) {
            console.log(index, j, dp[index][j]); 
        }
        
    }
    return Math.min(...dp[rows-1]);
};

// test
const triangle = [[2],[3,4],[6,5,7],[4,1,8,3]];
console.log(minimumTotal(triangle));