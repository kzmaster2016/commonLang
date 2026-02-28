/**
 * 被围绕的区域
给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' 组成，捕获 所有 被围绕的区域：
连接：一个单元格与水平或垂直方向上相邻的单元格连接。
区域：连接所有 'O' 的单元格来形成一个区域。
围绕：如果您可以用 'X' 单元格 连接这个区域，并且区域中没有任何单元格位于 board 边缘，则该区域被 'X' 单元格围绕。
通过 原地 将输入矩阵中的所有 'O' 替换为 'X' 来 捕获被围绕的区域。你不需要返回任何值。


示例 1：
输入：board = [['X','X','X','X'],['X','O','O','X'],['X','X','O','X'],['X','O','X','X']]
输出：[['X','X','X','X'],['X','X','X','X'],['X','X','X','X'],['X','O','X','X']]

输入：board = [['X']]
输出：[['X']]
 */

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
export const solve = (board) => {
    if (!board || board.length === 0) return;
    
    const rows = board.length;
    const cols = board[0].length;
    
    // 深度优先搜索标记边界上的 'O' 区域
    const dfs = (r, c) => {
        if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== 'O') {
            return;
        }
        // 标记为特殊字符 'B' 表示边界上的 'O'
        board[r][c] = 'B';
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    };
    
    // 标记第一列和最后一列边界上的 'O'
    for (let r = 0; r < rows; r++) {
        if (board[r][0] === 'O') dfs(r, 0);
        if (board[r][cols - 1] === 'O') dfs(r, cols - 1);
    }
    
    // 标记第一行和最后一行边界上的 'O'
    for (let c = 0; c < cols; c++) {
        if (board[0][c] === 'O') dfs(0, c);
        if (board[rows - 1][c] === 'O') dfs(rows - 1, c);
    }
    
    // 遍历整个矩阵，将 'O' 改为 'X'，将 'B' 改回 'O'
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === 'O') {
                board[r][c] = 'X';
            } else if (board[r][c] === 'B') {
                board[r][c] = 'O';
            }
        }
    }
};
 
