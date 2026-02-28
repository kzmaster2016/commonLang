/*蛇梯棋
给你一个大小为 n x n 的整数矩阵 board ，方格按从 1 到 n2 编号，编号遵循 转行交替方式 ，从左下角开始 （即，从 board[n - 1][0] 开始）的每一行改变方向。

你一开始位于棋盘上的方格  1。每一回合，玩家需要从当前方格 curr 开始出发，按下述要求前进：

选定目标方格 next ，目标方格的编号在范围 [curr + 1, min(curr + 6, n2)] 。
该选择模拟了掷 六面体骰子 的情景，无论棋盘大小如何，玩家最多只能有 6 个目的地。
传送玩家：如果目标方格 next 处存在蛇或梯子，那么玩家会传送到蛇或梯子的目的地。否则，玩家传送到目标方格 next 。 
当玩家到达编号 n2 的方格时，游戏结束。
如果 board[r][c] != -1 ，位于 r 行 c 列的棋盘格中可能存在 "蛇" 或 "梯子"。那个蛇或梯子的目的地将会是 board[r][c]。编号为 1 和 n2 的方格不是任何蛇或梯子的起点。

注意，玩家在每次掷骰的前进过程中最多只能爬过蛇或梯子一次：就算目的地是另一条蛇或梯子的起点，玩家也 不能 继续移动。

举个例子，假设棋盘是 [[-1,4],[-1,3]] ，第一次移动，玩家的目标方格是 2 。那么这个玩家将会顺着梯子到达方格 3 ，但 不能 顺着方格 3 上的梯子前往方格 4 。（简单来说，类似飞行棋，玩家掷出骰子点数后移动对应格数，遇到单向的路径（即梯子或蛇）可以直接跳到路径的终点，但如果多个路径首尾相连，也不能连续跳多个路径）
返回达到编号为 n2 的方格所需的最少掷骰次数，如果不可能，则返回 -1。
*/

/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    const n = board.length;
    const target = n * n;
    
    // 辅助函数：将编号转换为棋盘坐标
    const getPosition = (num) => {
        num--; // 转换为0-based
        const row = Math.floor(num / n);
        const col = num % n;
        
        // 如果是奇数行（从下往上数），列需要反转
        const r = n - 1 - row;
        const c = (row % 2 === 0) ? col : n - 1 - col;
        
        return [r, c];
    };
    
    // BFS队列
    const queue = [[1, 0]]; // [当前位置, 步数]
    const visited = new Set([1]);
    
    while (queue.length > 0) {
        const [curr, steps] = queue.shift();
        
        // 尝试掷骰子1-6点
        for (let dice = 1; dice <= 6; dice++) {
            let next = curr + dice;
            
            // 如果超出棋盘，跳过
            if (next > target) continue;
            
            // 获取棋盘坐标
            const [r, c] = getPosition(next);
            
            // 如果有蛇或梯子，传送到目的地
            if (board[r][c] !== -1) {
                next = board[r][c];
            }
            
            // 如果到达终点
            if (next === target) {
                return steps + 1;
            }
            
            // 如果未访问过，加入队列
            if (!visited.has(next)) {
                visited.add(next);
                queue.push([next, steps + 1]);
            }
        }
    }
    
    // 无法到达终点
    return -1;
};

// 测试用例
console.log(snakesAndLadders([[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]])); // 应该输出 4
console.log(snakesAndLadders([[-1,-1],[-1,3]])); // 应该输出 1
