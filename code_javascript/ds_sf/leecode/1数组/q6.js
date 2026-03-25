/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let result = [];
    let cycleLen = 2 * numRows - 2;
    if (numRows === 1) return s;
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j + i < s.length; j += cycleLen) {
            result.push(s[j + i]);
            if (i !== 0 && i !== numRows - 1 && j + cycleLen - i < s.length) {
                result.push(s[j + cycleLen - i]);
            }
        }
    }
    return result.join('');
};

var convertDiy = function (s, numRows) {
    if (numRows === 1 || numRows >= s.length || !s) return s;
    let result = [];

    // 初始化二维数组
    let mitrix = [];
    //当前列
    let col = [];
    let colIndex = 0;
    let goingDown = true;//需要向下走，填满一列


    for (let i = 0; i < s.length; i++) {
        if (col.length === 0) {
            col = new Array(numRows).fill('');
        }
        if (goingDown) {
            col[colIndex] = s[i];
            if (colIndex === numRows - 1) {
                goingDown = false;
                colIndex--;
                // 填满一列，放入二维数组，重置col
                mitrix.push(col);
                col = [];
            } else {
                colIndex++;
            }
        } else {
            col[colIndex] = s[i];
            if (colIndex === 0) {
                goingDown = true;
                colIndex++;
            } else {

                colIndex--;
                mitrix.push(col);
                col = [];
            }   
        }
    }
        
    // 填入最后一列
    if (col.length > 0) {
        mitrix.push(col);
    }
    // 读取二维数组
    for (let r = 0; r < numRows; r++) {
        for (let c = 0; c < mitrix.length; c++) {
            if (mitrix[c][r] !== '') {
                result.push(mitrix[c][r]);
            }
        }
    }

    //调试打印
    for (let c = 0; c < mitrix.length; c++) {
        console.log(mitrix[c]);
    }

    return result.join('');
};

console.log(convertDiy('PAYPALISHIRING', 3));
console.log(convertDiy('PAYPALISHIRING', 4));
console.log(convertDiy('A', 1));
