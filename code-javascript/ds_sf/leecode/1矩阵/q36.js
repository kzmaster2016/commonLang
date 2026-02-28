/**
 * 数独验证
 * 3种分割遍历方式
 */
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = Array(9).fill().map(() => new Set());
    const cols = Array(9).fill().map(() => new Set());
    const boxes = Array(9).fill().map(() => new Set());
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const val = board[r][c];
            if (val !== '.') {
                const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                
                if (rows[r].has(val) || cols[c].has(val) || boxes[boxIndex].has(val)) {
                    return false;
                }
                rows[r].add(val);
                cols[c].add(val);
                boxes[boxIndex].add(val);
            }
        }
    }
    return true;
};