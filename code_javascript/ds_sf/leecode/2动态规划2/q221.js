/**
 * 最大正方形
在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let maxSide = 0;
    const rows = matrix.length;
    const cols = matrix[0].length;
    const dp = new Array(rows).fill(0).map(() => new Array(cols).fill(0));

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (matrix[r][c] === '1') {
                if (r === 0 || c === 0) {
                    dp[r][c] = 1;
                } else {
                    dp[r][c] = Math.min(dp[r - 1][c], dp[r][c - 1], dp[r - 1][c - 1]) + 1;
                }
                maxSide = Math.max(maxSide, dp[r][c]);
            }
        }
    }

    for (let index = 0; index < dp.length; index++) {
         
        for (let j = 0; j < dp[index].length; j++) {
            console.log(index, j, dp[index][j]); 
            
        }
        
    }
    return maxSide * maxSide;
};
// test
const matrix = [
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0']
];
console.log(maximalSquare(matrix));