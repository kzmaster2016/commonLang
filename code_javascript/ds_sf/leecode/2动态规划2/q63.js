/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    
    // 如果起点或终点有障碍物，则无法到达
    if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) {
        return 0;
    }
    
    // dp[i][j] 表示从 (0, 0) 到 (i, j) 的路径数
    let dp = Array.from({ length: m }, () => Array(n).fill(0));
    
    // 初始化起点
    dp[0][0] = 1;
    
    // 填充 dp 数组
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0; // 障碍物位置的路径数为 0
            } else if (i > 0 || j > 0) {
                if (i > 0) {
                    dp[i][j] += dp[i - 1][j];
                }
                if (j > 0) {
                    dp[i][j] += dp[i][j - 1];
                }
            }
        }
    }
    
    return dp[m - 1][n - 1];
};