/**
 * // Definition for a QuadTree node.
 * function _Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {_Node}
 */
/**
 * 构建四叉树的核心函数（无class版）
 * @param {number[][]} grid 输入的n*n 0/1矩阵
 * @return {Object} 四叉树根节点（普通对象）
 */
function construct(grid) {
    const n = grid.length;
    // 递归构建：起始行0、起始列0、边长n
    return buildQuadTree(grid, 0, 0, n);
}

/**
 * 递归辅助函数：构建指定区域的四叉树节点
 * @param {number[][]} grid 原始矩阵
 * @param {number} r 区域起始行
 * @param {number} c 区域起始列
 * @param {number} size 区域边长
 * @return {Object} 当前区域的四叉树节点
 */
function buildQuadTree(grid, r, c, size) {
    // 校验当前区域是否所有值相同（递归终止条件）
    if (isUniform(grid, r, c, size)) {
        // 构建叶子节点：用普通对象表示，属性和原Node类一致
        return {
            val: grid[r][c] === 1, // 1→true，0→false
            isLeaf: true,
            topLeft: null,
            topRight: null,
            bottomLeft: null,
            bottomRight: null
        };
    }

    // 非叶子节点：拆分4个子区域（边长减半）
    const half = Math.floor(size / 2);
    // 递归构建四个子节点
    const topLeft = buildQuadTree(grid, r, c, half);
    const topRight = buildQuadTree(grid, r, c + half, half);
    const bottomLeft = buildQuadTree(grid, r + half, c, half);
    const bottomRight = buildQuadTree(grid, r + half, c + half, half);

    // 构建内部节点（普通对象）：isLeaf=false，val可设任意值
    return {
        val: false,
        isLeaf: false,
        topLeft: topLeft,
        topRight: topRight,
        bottomLeft: bottomLeft,
        bottomRight: bottomRight
    };
}

/**
 * 辅助函数：校验指定区域内所有元素是否相同
 */
function isUniform(grid, r, c, size) {
    const baseVal = grid[r][c];
    for (let i = r; i < r + size; i++) {
        for (let j = c; j < c + size; j++) {
            if (grid[i][j] !== baseVal) return false;
        }
    }
    return true;
}

// ------------------- 测试示例 -------------------
// 测试用例1：全1矩阵
const grid1 = [[1,1],[1,1]];
const root1 = construct(grid1);
console.log(root1.isLeaf); // 输出 true
console.log(root1.val);    // 输出 true

// 测试用例2：混合矩阵
const grid2 = [[1,1,0,0],[1,1,0,0],[0,0,1,1],[0,0,1,1]];
const root2 = construct(grid2);
console.log(root2.isLeaf);          // 输出 false
console.log(root2.topLeft.isLeaf);  // 输出 true
console.log(root2.bottomRight.val); // 输出 true