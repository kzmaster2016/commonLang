## 遍历方法
1.前序：决策流：构建 / 决策 / 规则下传
2.中序：顺序流（结合搜索树）：顺序 / 导出 / 排序
3.后序：结果流：统计 / 计算 / 聚合
4.层序（BFS）：传播流：层级 / 距离 / 传播
5.DFS+回溯：流程流：路径 / 决策链

### 前序遍历：使用场景
#### 特点：
1. 它天然适合：构建 / 输出 / 决策
2. 凡是 “父节点要先于子节点生效” 的场景，前序遍历几乎都是最优解。
#### 实际工程例子
1. 构建类
    1. DOM Tree 构建
    2. AST（抽象语法树）构建
    3. JSON / 配置树解析
2. 复制 / 克隆树结构
```js
function clone(node) {
    if (!node) return null;
    const newNode = new TreeNode(node.val); // 先建
    newNode.left = clone(node.left);
    newNode.right = clone(node.right);
    return newNode;
}

```
3. 序列化 / 反序列化
    1. 前序遍历 + null 标记 = 树的唯一表示
4. 路径类
    1. 所有根到叶子路径
    2. 路径和（Path Sum）
    3. 路径字符串拼接
```js
function dfs(node, path) {
    if (!node) return;
    path.push(node.val);   // 先加
    if (isLeaf(node)) res.push([...path]);
    dfs(node.left, path);
    dfs(node.right, path);
    path.pop();
}
```
5. 权限 / 决策场景 
    1. 菜单权限继承
    2. 配置向下覆盖
```js
function dfs(node, permission) {
    permission |= node.permission; // 先处理当前
    dfs(node.left, permission);
    dfs(node.right, permission);
}
```
6. 打印 / 展示结构（目录树）



### 中序遍历：使用场景
#### 特点：
1. 在左与右之间，得到一个‘有序视图’
2. 中序遍历 = 把“树结构”投影成“线性顺序”
#### 实际工程例子
1. 二叉搜索树（BST）相关（绝对主场）
2. 表达式树（Expression Tree）(人类可读)
    1. (1+2)*3
3. 有序区间、范围查询
```js
function rangeQuery(node, L, R) {
    if (!node) return;
    if (node.val > L) rangeQuery(node.left, L, R);
    if (node.val >= L && node.val <= R) output(node.val);
    if (node.val < R) rangeQuery(node.right, L, R);
}
```
4. 既想线性，又不想完全丢层级
    1. 将层级depth参数，传递进去
```js
function inorderWithMeta(root) {
    const res = [];
    function dfs(node, depth, path) {
        if (!node) return;
        dfs(node.left, depth + 1, path + "L");
        res.push({
            val: node.val,
            depth,
            path
        });
        dfs(node.right, depth + 1, path + "R");
    }
    dfs(root, 0, "");
    return res;
}
```


### 后序遍历：使用场景
#### 特点：
1. “结果依赖子树结果”
#### 实际工程例子
1. 统计 / 聚合类问题
    1. 树的高度
    3. 子树和
    4. 最大 / 最小值
    5. 表达式树求值
```js
function eval(node) {
    if (node.isNumber) return node.val;
    const left = eval(node.left);
    const right = eval(node.right);
    return apply(node.op, left, right);
}
```
2. 树的删除 / 释放资源
    1. 释放内存
    2. 删除文件目录
    3. 关闭资源（socket / fd）
```js
function deleteTree(node) {
    if (!node) return;
    deleteTree(node.left);
    deleteTree(node.right);
    delete node;
}
```
3. 二叉树结构判断
    1. 是否完全二叉树
    2. 是否慢二叉树
    3. 是否平衡二叉树
```js
function isBalanced(node) {
    function dfs(n) {
        if (!n) return 0;
        const l = dfs(n.left);
        if (l === -1) return -1;
        const r = dfs(n.right);
        if (r === -1) return -1;
        if (Math.abs(l - r) > 1) return -1;
        return Math.max(l, r) + 1;
    }
    return dfs(node) !== -1;
}
```
4. 树结构转换，重构
    1. 把树压平
    2. 转链表
    3. 重新挂接子树
5. 树形DP：动态规划  
    1. 打家劫舍 III
    2. 最大路径和
    3. 树上的最优解
```js
function dfs(node) {
    if (!node) return [0, 0];
    const [l0, l1] = dfs(node.left);
    const [r0, r1] = dfs(node.right);
    const rob = node.val + l0 + r0;
    const notRob = Math.max(l0, l1) + Math.max(r0, r1);
    return [notRob, rob];
}
```
6. 校验「结构 + 数值」类复杂条件
    1. 判断子树是否满足某规则
    2. 同时返回多种信息
```js
function dfs(node) {
    if (!node) return { ok: true, min: ∞, max: -∞ };
    const L = dfs(node.left);
    const R = dfs(node.right);
    const ok = L.ok && R.ok && node.val > L.max && node.val < R.min;
    return {
        ok,
        min: Math.min(node.val, L.min),
        max: Math.max(node.val, R.max)
    };
}

```


### 层序遍历：使用场景
#### 特点：
1. 按距离 / 层级 / 波次推进
#### 实际工程例子
1. UI / 视图 / 层次结构展示
    1. 树形菜单
    2. 组织架构图
    3. 评论回复
    4. 可视化布局
```js
function levelOrder(root) {
    if (!root) return [];
    const res = [];
    const queue = [root];

    while (queue.length) {
        const size = queue.length;
        const level = [];
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        res.push(level);
    }
    return res;
}
```
2. 最短路径 / 最近问题（非常重要）
    1. 最近的叶子
    2. 最近的目标节点
    3. 最少步数
```js
function minDepth(root) {
    if (!root) return 0;
    const queue = [[root, 1]];
    while (queue.length) {
        const [node, depth] = queue.shift();
        if (!node.left && !node.right) return depth;
        if (node.left) queue.push([node.left, depth + 1]);
        if (node.right) queue.push([node.right, depth + 1]);
    }
}
```
3. 层级规则 / 批量处理（工程高频）
    1. 权限一层层生效
    2. 消息传播
    3. 配置下发
4. 树 → 数组 / 堆 / 索引结构
    1. 二叉堆
    2. 索引编号


### DFS(通常前序) + 路径（回溯）
#### 特点：
1. DFS + 路径 = 枚举所有可能路径 / 方案 / 决策序列
```js
//通用模板：选择、递归、回溯
function dfs(node, path) {
    if (!node) return;
    // 选择，回溯栈
    path.push(node.val);          

    //满足条件
    if (isEnd(node)) {
         // 记录一条完整路径
        record([...path]);       
    }

    //这里，不限于二叉树
    for (let next of node.children) {
        dfs(next, path); //递归
    }

    // 撤销选择，回溯
    path.pop();                   
}

```
### 实际工程例子
1. 二叉树：所有根到叶子的路径
    1. 决策流程、页面跳转链、菜单点击路径
```js
function binaryTreePaths(root) {
    const res = [];
    function dfs(node, path) {
        if (!node) return;
        path.push(node.val);
        //前序
        if (!node.left && !node.right) {
            res.push(path.join("->"));
        }

        
        dfs(node.left, path);
        dfs(node.right, path);
        path.pop();
    }
    dfs(root, []);
    return res;
}
```
2. 路径和 / 条件路径(严格不算，因为没有回溯)
    1. 预算路径、风控规则链、权重累加是否达标
```js
function hasPathSum(root, target) {
    function dfs(node, sum) {
        if (!node) return false;
        sum += node.val;
        if (!node.left && !node.right) {
            return sum === target;
        }
        //前序
        return dfs(node.left, sum) || dfs(node.right, sum);
    }
    return dfs(root, 0);
}
```
3. 目录 / 文件系统路径枚举（工程高频）
```js
function listPaths(dir, path) {
    path.push(dir.name);
    if (dir.isFile) {
        console.log(path.join("/"));
    }
    for (let child of dir.children) {
        listPaths(child, path);
    }
    path.pop();
}
```
4. 菜单树 → 面包屑导航（真实前端业务）
```js
function findBreadcrumb(root, targetId) {
    const path = [];
    function dfs(node) {
        if (!node) return false;
        path.push(node.name);
        if (node.id === targetId) return true;
        for (let child of node.children) {
            if (dfs(child)) return true;
        }
        path.pop();
        return false;
    }
    dfs(root);
    return path;
}
```
5. 回溯类经典题（其实全是“路径”）
    1. 全排列：path表示：已选择元素
    2. 子集：path表示：当前选择集合
    3. 组合总和：path表示：当前组合
    4. N皇后：path表示：皇后位置
```js
function permute(nums) {
    const res = [];
    const path = [];
    const used = Array(nums.length).fill(false);

    function dfs() {
        if (path.length === nums.length) {
            res.push([...path]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            used[i] = true;
            path.push(nums[i]);
            dfs();
            path.pop();
            used[i] = false;
        }
    }

    dfs();
    return res;
}
```
6. 图 / 树中的所有可能方案（组合爆炸）
    1. 从起点到终点的所有路径
```js
function allPaths(graph, start, end) {
    const res = [];
    const path = [];

    function dfs(node) {
        path.push(node);
        if (node === end) {
            res.push([...path]);
        } else {
            for (let next of graph[node]) {
                dfs(next);
            }
        }
        path.pop();
    }

    dfs(start);
    return res;
}
```


```js

DFS = 一次结构扫描
回溯 = 记录路径
返回值 = 子问题答案

二、dfs 参数到底从哪来？（3 个来源）
① 结构位置（你在哪）你当前遍历到哪里了

场景	参数
二叉树	node
图	node
数组 / 字符串	index
二维网格	(i, j)

✔ 这是 DFS 的“坐标”

② 路径信息（你走了什么）你已经做过的选择

场景	参数
路径	path
当前组合	track
当前字符串	str
当前和	sum
当前深度	depth

✔ 这是回溯的核心

③ 约束条件（你还剩多少）限制搜索空间的变量

场景	参数
剩余目标	remain
剩余步数	k
最大值	limit
上界/下界	min/max

✔ 不传就会爆搜索

5️⃣ DFS + 路径（回溯型）

📌 场景：

所有根 → 叶路径

路径和

菜单 / 权限路径

path.push(node.val)
dfs(...)
path.pop()


👉 本质：前序 DFS + 回溯

6️⃣ DFS + 返回值（树形 DP）

📌 场景：

最大深度

子树和

是否平衡

是否 BST（区间）

left = dfs(left)
right = dfs(right)
return f(left, right)


👉 本质：后序 DFS

7️⃣ DFS + 区间 / 状态传递

📌 场景：

校验 BST

上下界约束

dfs(node, min, max)


👉 本质：约束随递归向下传递
```