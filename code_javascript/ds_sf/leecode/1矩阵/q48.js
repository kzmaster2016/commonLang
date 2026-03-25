/**
 * 旋转矩阵
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length;
    // 主对角线翻转
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    // 再水平翻转每一行
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
};

var rotate3 = function(matrix) {
    const n = matrix.length;
    // 副对角线翻转
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            [matrix[i][j], matrix[n - 1 - j][n - 1 - i]] = [matrix[n - 1 - j][n - 1 - i], matrix[i][j]];
        }
    }
    
    // 再垂直翻转每一列
    for (let i = 0; i < n / 2; i++) {
        for (let j = 0; j < n; j++) {
            [matrix[i][j], matrix[n - 1 - i][j]] = [matrix[n - 1 - i][j], matrix[i][j]];
        }
    }
};
 


// 方法2：新建一个矩阵
/**
 * @param {number[][]} matrix
 * @return {number[][]} return the rotated matrix.
 */
var rotate2 = function(matrix) {
    const n = matrix.length;
    let matrix2 = new Array(n).fill(0).map(() => new Array(n).fill(0));
    // 先转置矩阵
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            //j决定新的i，i决定新的j
            matrix2[j][n - 1 - i] = matrix[i][j];
        }
    }

    for (let i = 0; i < n; i++) {
        console.log(...matrix2[i]);
    }
    return matrix2;
};
//test
console.log(rotate2([[1,2,3],[4,5,6],[7,8,9]]));
console.log(rotate2([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]));

