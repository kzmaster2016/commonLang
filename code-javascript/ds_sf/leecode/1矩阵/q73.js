/**
 * 矩阵置零
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let firstRowHasZero = false;
    let firstColHasZero = false;

    // 检查第一行和第一列是否有0
    for (let i = 0; i < rows; i++) {
        if (matrix[i][0] === 0) {
            firstColHasZero = true;
            break;
        }
    }

    for (let j = 0; j < cols; j++) {
        if (matrix[0][j] === 0) {
            firstRowHasZero = true;
            break;
        }
    }

    // 标记需要置零的行列
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // 置零
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // 处理第一行和第一列
    if (firstRowHasZero) {
        for (let j = 0; j < cols; j++) {
            matrix[0][j] = 0;
        }
    }

    if (firstColHasZero) {
        for (let i = 0; i < rows; i++) {
            matrix[i][0] = 0;
        }
    }
};

var setZeroes2 = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let zeroPositions = [];

    // 记录所有0的位置
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                zeroPositions.push([i, j]);
            }
        }
    }

    // 将所有0置零
    for (let i = 0; i < zeroPositions.length; i++) {
        const [row, col] = zeroPositions[i];
        for (let j = 0; j < cols; j++) {
            matrix[row][j] = 0;
        }
        for (let j = 0; j < rows; j++) {
            matrix[j][col] = 0;
        }
    }    
};