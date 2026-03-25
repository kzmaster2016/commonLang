//构建邻接表（最常用）
function buildGraph(n, edges, directed = false) {
  const graph = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    if (!directed) graph[v].push(u);
  }
  return graph;
}

//DFS 模板（连通性 / 环 / 搜索）
/**
岛屿数量
是否连通
DFS 搜索路径
 */
function dfsGraph(graph) {
  const n = graph.length;
  const visited = new Array(n).fill(false);

  function dfs(u) {
    visited[u] = true;
    for (const v of graph[u]) {
      if (!visited[v]) {
        dfs(v);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
    }
  }
}

// BFS 模板（最短路径 / 最少步数）
// 最短路径（无权）
// 腐烂的橘子
// 单词接龙
function bfs(start, graph) {
  const n = graph.length;
  const visited = new Array(n).fill(false);
  const queue = [];
  let steps = 0;

  queue.push(start);
  visited[start] = true;

  //queue是一个队列
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      //u是图结构中的当前节点
      const u = queue.shift();
      //v是图结构中的下一个节点
      for (const v of graph[u]) {
        //visited[v]是标记变量，避免重复
        if (!visited[v]) {
          visited[v] = true;
          queue.push(v);
        }
      }
    }
    steps++;
  }
}


//拓扑排序（BFS 入度版，超高频）
// 课程表
// 依赖关系
// 是否能完成所有任务
function topoSort(n, edges) {
  const graph = Array.from({ length: n }, () => []);
  const indegree = new Array(n).fill(0);

  for (const [u, v] of edges) {
    graph[u].push(v);
    indegree[v]++;
  }

  const queue = [];
  for (let i = 0; i < n; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  const order = [];
  while (queue.length) {
    const u = queue.shift();
    order.push(u);
    for (const v of graph[u]) {
      if (--indegree[v] === 0) {
        queue.push(v);
      }
    }
  }

  return order.length === n ? order : []; // 空数组表示有环
}

// 有向图环检测（DFS 三色）
function hasCycle(n, edges) {
  const graph = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) graph[u].push(v);

  const color = new Array(n).fill(0); // 0=未访问,1=访问中,2=已完成

  function dfs(u) {
    color[u] = 1;
    for (const v of graph[u]) {
      if (color[v] === 1) return true;
      if (color[v] === 0 && dfs(v)) return true;
    }
    color[u] = 2;
    return false;
  }

  for (let i = 0; i < n; i++) {
    if (color[i] === 0 && dfs(i)) return true;
  }
  return false;
}

// 并查集（连通块 / 无向图成环）
// 冗余连接
// 省份数量
// 动态连通性
class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(a, b) {
    const pa = this.find(a);
    const pb = this.find(b);
    if (pa === pb) return false;
    this.parent[pb] = pa;
    return true;
  }
}

export {
  //基础
  buildGraph,//由边构件图 
  dfsGraph,//深度优先
  bfs,//广度优先

  //扩展
  topoSort,//拓扑排序 bfs
  hasCycle,//有向图环检测 dfs 待使用
  UnionFind,//无向图环检测 并查集 待使用
};