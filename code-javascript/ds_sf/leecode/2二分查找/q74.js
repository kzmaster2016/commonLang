
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rows = matrix.length;
    if(rows === 0) return false;
    let cols = matrix[0].length;
    let left = 0, right = rows * cols - 1;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        let row = Math.floor(mid / cols);
        let col = mid % cols;
        if(matrix[row][col] === target) return true;
        else if(matrix[row][col] < target) left = mid + 1;
        else right = mid - 1;
    }
    return false;
};

var searchMatrix2 = function(matrix, target) {
    let rows = matrix.length;
    if(rows === 0) return false;
    let cols = matrix[0].length;
    
    let left = 0, right = rows * cols - 1;
    //矩阵转以为一维
    let matrixPlat = [];
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            matrixPlat.push(matrix[i][j]);
        }
    }
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if(matrixPlat[mid] === target) return true;
        else if(matrixPlat[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return false;
};