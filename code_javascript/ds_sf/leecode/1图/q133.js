// 定义图节点类（对应题目中的 Node 类）
class Node {
  constructor(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

/**
 * 克隆无向连通图（深拷贝）
 * @param {Node} node 原图的起始节点（值为1的节点）
 * @returns {Node} 克隆图的起始节点
 */
var cloneGraph = function(node) {
  // 边界条件：空节点直接返回 null
  if (!node) return null;

  // 1. 初始化哈希表（原节点 → 克隆节点）和 BFS 队列
  const cloneMap = new Map(); // JS 中用 Map 存储对象映射更合适
  const queue = [node]; // 队列存储原图的节点，用于遍历

  // 先创建第一个节点的克隆体，存入哈希表
  cloneMap.set(node, new Node(node.val));

  // 2. BFS 遍历原图，逐个克隆节点和邻居关系
  while (queue.length > 0) {
    // 取出队列头部的原节点（模拟队列的出队操作）
    const currentOriginal = queue.shift();
    // 获取对应的克隆节点
    const currentClone = cloneMap.get(currentOriginal);

    // 遍历原节点的所有邻居
    for (const neighborOriginal of currentOriginal.neighbors) {
      // 如果邻居还没被克隆过：创建克隆体 + 入队
      if (!cloneMap.has(neighborOriginal)) {
        cloneMap.set(neighborOriginal, new Node(neighborOriginal.val));
        queue.push(neighborOriginal);
      }

      // 将克隆后的邻居添加到当前克隆节点的邻居列表中
      currentClone.neighbors.push(cloneMap.get(neighborOriginal));
    }
  }

  // 3. 返回克隆后第一个节点的引用
  return cloneMap.get(node);
};

// ------------------- 测试代码 -------------------
/**
 * 根据邻接列表构建原图（用于测试）
 * @param {number[][]} adjList 邻接列表
 * @returns {Node} 原图的起始节点（值为1的节点）
 */
function buildGraph(adjList) {
  if (!adjList || adjList.length === 0) return null;
  
  // 创建所有节点（节点值 = 索引+1）
  const nodes = adjList.map((_, index) => new Node(index + 1));
  
  // 填充邻居关系
  adjList.forEach((neighbors, index) => {
    nodes[index].neighbors = neighbors.map(val => nodes[val - 1]);
  });
  
  return nodes[0];
}

/**
 * BFS 遍历并打印图结构（验证克隆结果）
 * @param {Node} node 图的起始节点
 * @returns {number[][]} 图的邻接列表形式
 */
function printGraph(node) {
  if (!node) return [];
  
  const visited = new Set();
  const queue = [node];
  visited.add(node);
  
  // 用于按节点值排序存储结果（保证输出顺序一致）
  const result = [];
  
  while (queue.length > 0) {
    const curr = queue.shift();
    // 收集当前节点的邻居值
    const neighborVals = curr.neighbors.map(n => n.val);
    // 节点值 = 索引+1，所以放到对应索引位置
    result[curr.val - 1] = neighborVals;
    
    // 遍历邻居，未访问过的入队
    for (const n of curr.neighbors) {
      if (!visited.has(n)) {
        visited.add(n);
        queue.push(n);
      }
    }
  }
  
  return result;
}

// 测试用例执行
// 示例：邻接列表 [[2,4],[1,3],[2,4],[1,3]]
const adjList = [[2,4],[1,3],[2,4],[1,3]];
// 构建原图
const originalNode = buildGraph(adjList);
// 克隆图
const clonedNode = cloneGraph(originalNode);

// 验证结果
console.log("原图结构：", printGraph(originalNode));   // 输出：[[2,4],[1,3],[2,4],[1,3]]
console.log("克隆图结构：", printGraph(clonedNode)); // 输出：[[2,4],[1,3],[2,4],[1,3]]
// 验证是否是深拷贝（内存地址不同）
console.log("原节点与克隆节点是否为同一对象：", originalNode === clonedNode); // 输出：false