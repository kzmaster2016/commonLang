/**
 * 生命游戏
给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。每个细胞都具有一个初始状态： 1 即为 活细胞 （live），或 0 即为 死细胞 （dead）。每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：

如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
如果死细胞周围正好有三个活细胞，则该位置死细胞复活；
下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，其中细胞的出生和死亡是 同时 发生的。给你 m x n 网格面板 board 的当前状态，返回下一个状态。

给定当前 board 的状态，更新 board 到下一个状态。
 */


/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const m = board.length;
    const n = board[0].length;

    const dirs = [
        [-1, -1], [-1, 0], [-1, 1],
        [ 0, -1],          [ 0, 1],
        [ 1, -1], [ 1, 0], [ 1, 1]
    ];

// 0 → 0	死 → 死	0 ：00
// 1 → 0	活 → 死	1 ：01
// 0 → 1	死 → 活	2 ：10
// 1 → 1	活 → 活	3 ：11
    // 1. 计算下一状态，编码进当前数组
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let liveNeighbors = 0;

            for (const [dx, dy] of dirs) {
                const x = i + dx;
                const y = j + dy;
                if (x >= 0 && x < m && y >= 0 && y < n) {
                    liveNeighbors += board[x][y] & 1;
                }
            }

            const curr = board[i][j] & 1;

            // 活细胞
            if (curr === 1 && (liveNeighbors === 2 || liveNeighbors === 3)) {
                board[i][j] = 3; // 1 -> 1
            }

            // 死细胞复活
            if (curr === 0 && liveNeighbors === 3) {
                board[i][j] = 2; // 0 -> 1
            }
        }
    }

    // 2. 统一更新到下一代
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            board[i][j] >>= 1;
        }
    }
};