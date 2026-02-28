
export default function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


//前序
export var preorder = function (root) {
    const res = [];

    function dfs(node) {
        if (!node) return;
        res.push(node.val);   // 根
        dfs(node.left);       // 左
        dfs(node.right);      // 右
    }

    dfs(root);
    return res;
};

//中序：和二叉搜索树是绝配
export function inorder(root) {
    const res = [];
    function dfs(node) {
        if (!node) return;
        dfs(node.left);
        res.push(node.val);
        dfs(node.right);
    }
    dfs(root);
    return res;
}

//后序
export function postorder(root) {
    const res = [];
    function dfs(node) {
        if (!node) return;
        dfs(node.left);
        dfs(node.right);
        // 在这里“计算当前节点”
        res.push(node.val);
    }
    dfs(root);
    return res;
}

// 栈模拟 DFS
// 前序	先右后左入栈
// 中序	一路压左
// 后序	双栈 / 标记法
export var preorder2 = function (root) {
    if (!root) return [];

    const stack = [root];
    const res = [];

    while (stack.length) {
        const node = stack.pop();
        res.push(node.val);       // 访问节点

        if (node.right) stack.push(node.right); // 先右后左
        if (node.left) stack.push(node.left);
    }

    return res;
};

export var inorder2 = function (root) {
    let stack = [];
    let curr = root;
    const res = [];
    while (curr || stack.length) {
        //压栈
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        //出栈
        curr = stack.pop();
        curr && res.push(curr.val);

        curr = curr.right;
    }

    return res;
};

export var postorder2 = function (root) {
    if (!root) return [];
    const stack = [root];
    const res = [];


    while (stack.length) {
        const node = stack.pop();
        res.push(node.val);

        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }

    return res.reverse();  // 翻转得到后序
};


//层序遍历
export const levelOrder = function (root) {
    if (!root) return [];

    const res = [];
    const queue = [root];

    /**
    队列：先进先出;
    子节点一定在父节点后面出队列
    父节点一定在子节点前面出队列
     */
    while (queue.length) {
        const size = queue.length;
        const level = [];
        // console.log("size:", size);//每层节点数

        for (let i = 0; i < size; i++) {//循环可不加
            const node = queue.shift();
            level.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        // console.log("level:", ...level);
        res.push(...level);
    }
    return res;
};

//对称遍历:自研
export const symmetryOrder = (t1, t2) => {
    // 两个都空：结构占位
    if (!t1 && !t2) {
        return [null, null];
    }
    // 一个空一个不空：结构不对称

    let res = [t1 ? t1.val : null, t2 ? t2.val : null];

    res.push(
        ...symmetryOrder(t1?.left, t2?.right),
        ...symmetryOrder(t1?.right, t2?.left)
    );
    //过滤null值
    res = res.filter(v => v !== null);

    return res;
};


// 路径类模板（回溯）
export var binaryTreePaths = function (root) {
    const res = [];

    function dfs(node, path) {
        if (!node) return;

        //回溯栈
        path.push(node.val);

        //满足条件
        if (!node.left && !node.right) {
            res.push(path.join("->"));
        }

        dfs(node.left, path);
        dfs(node.right, path);

        // 回溯
        path.pop(); 
    }

    dfs(root, []);
    return res;
};

//打印方式1：结构最严谨
export function printTree(root) {
    function dfs(node, prefix, isLeft) {
        if (!node) return;

        console.log(prefix + (isLeft ? "├── " : "└── ") + node.val);

        const newPrefix = prefix + (isLeft ? "│   " : "    ");
        dfs(node.right, newPrefix, true);
        dfs(node.left, newPrefix, false);
    }

    console.log(root.val);
    dfs(root.right, "", true);
    dfs(root.left, "", false);
}

//打印方式2
export function printTree2(root) {
    if (!root) return;

    function getHeight(root) {
        if (!root) return 0;
        return 1 + Math.max(getHeight(root.left), getHeight(root.right));
    }
    const height = getHeight(root);
    let queue = [root];

    for (let level = 0; level < height; level++) {
        const levelSize = queue.length;
        let line = "";

        const leadingSpaces = Math.pow(2, height - level - 1);
        const betweenSpaces = Math.pow(2, height - level);

        line += "-".repeat(leadingSpaces);

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();

            if (node) {
                line += node.val;
                queue.push(node.left);
                queue.push(node.right);
            } else {
                line += "-";
                queue.push(null);
                queue.push(null);
            }

            line += "-".repeat(betweenSpaces);
        }

        console.log(line);
    }
}

//打印方式3
export function printTree3(root) {
    function build(node) {
        if (!node) {
            return {
                lines: [],
                width: 0,
                rootPos: 0
            };
        }

        const valStr = String(node.val);
        const valWidth = valStr.length;

        // 叶子节点
        if (!node.left && !node.right) {
            return {
                lines: [valStr],
                width: valWidth,
                rootPos: Math.floor(valWidth / 2)
            };
        }

        const left = build(node.left);
        const right = build(node.right);

        const gap = 3; // 左右子树间距
        const width = left.width + gap + right.width;

        const rootPos = Math.floor(
            (left.rootPos + (left.width + gap + right.rootPos)) / 2
        );

        // 第一行：父节点
        let firstLine =
            "-".repeat(rootPos) +
            valStr +
            "-".repeat(width - rootPos - valWidth);

        // 合并子树行
        const maxLines = Math.max(left.lines.length, right.lines.length);
        let lines = [firstLine];

        for (let i = 0; i < maxLines; i++) {
            const leftLine = left.lines[i] || "-".repeat(left.width);
            const rightLine = right.lines[i] || "-".repeat(right.width);
            lines.push(leftLine + "-".repeat(gap) + rightLine);
        }

        return {
            lines,
            width,
            rootPos
        };
    }

    const result = build(root);
    result.lines.forEach(line => console.log(line));
}

//双栈法
export var postorder2_1 = function (root) {
    if (!root) return [];

    const stack1 = [root];
    const stack2 = [];
    const res = [];

    while (stack1.length) {
        const node = stack1.pop();
        stack2.push(node);

        if (node.left) stack1.push(node.left);
        if (node.right) stack1.push(node.right);
    }

    while (stack2.length) {
        res.push(stack2.pop().val);
    }

    return res;
};

//单栈+上一个节点
export var postorder2_2 = function (root) {
    const res = [];
    const stack = [];
    let curr = root;
    let prev = null;

    while (curr || stack.length) {
        // 一路向左
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }

        curr = stack[stack.length - 1];

        // 右子树不存在 or 已访问
        if (!curr.right || curr.right === prev) {
            res.push(curr.val);
            stack.pop();
            prev = curr;
            curr = null;
        } else {
            curr = curr.right;
        }
    }

    return res;
};

//单栈+标记
export var postorder2_3 = function (root) {
    const res = [];
    const stack = [[root, false]];

    while (stack.length) {
        const [node, visited] = stack.pop();
        if (!node) continue;

        if (visited) {
            res.push(node.val);
        } else {
            stack.push([node, true]);
            stack.push([node.right, false]);
            stack.push([node.left, false]);
        }
    }

    return res;
};


//前序 + 中序 构造二叉树
export var buildTree1 = function (preorder, inorder) {
    // 中序值 -> 下标，O(1) 查找
    const indexMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        indexMap.set(inorder[i], i);
    }

    function build(preL, preR, inL, inR) {
        if (preL > preR) return null;

        const rootVal = preorder[preL];
        const root = new TreeNode(rootVal);

        const idx = indexMap.get(rootVal);
        const leftSize = idx - inL;

        root.left = build(
            preL + 1,
            preL + leftSize,
            inL,
            idx - 1
        );

        root.right = build(
            preL + leftSize + 1,
            preR,
            idx + 1,
            inR
        );

        return root;
    }

    return build(0, preorder.length - 1, 0, inorder.length - 1);
};

/**
preorder = [3,9,20,15,7]
inorder  = [9,3,15,20,7]
*/
//前序+中序
export var buildTree2 = function (preorder, inorder) {
    // 中序值 -> 索引，加速查找
    const indexMap = new Map();
    inorder.forEach((val, idx) => indexMap.set(val, idx));

    let preIndex = 0;

    function build(left, right) {
        if (left > right) return null;

        // 1️⃣ 前序当前值就是根
        const rootVal = preorder[preIndex++];
        const root = new TreeNode(rootVal);

        // 2️⃣ 中序中找到根的位置
        const mid = indexMap.get(rootVal);

        // 3️⃣ 先构建左子树，再右子树
        root.left = build(left, mid - 1);
        root.right = build(mid + 1, right);

        return root;
    }

    return build(0, inorder.length - 1);
};

/*
postorder = [9,15,7,20,3]
inorder   = [9,3,15,20,7]
*/
//后序+中序
export function buildTree2_1(inorder, postorder) {
    const indexMap = new Map();
    inorder.forEach((val, idx) => indexMap.set(val, idx));

    let postIndex = postorder.length - 1;

    function build(left, right) {
        if (left > right) return null;

        // 1️⃣ 当前后序元素是根
        const rootVal = postorder[postIndex--];
        const root = new TreeNode(rootVal);

        // 2️⃣ 在中序中定位根
        const mid = indexMap.get(rootVal);

        // 3️⃣ ⚠️ 先右后左（非常关键）
        root.right = build(mid + 1, right);
        root.left = build(left, mid - 1);

        return root;
    }

    return build(0, inorder.length - 1);
};

//层序+数组索引+null(完整占位) buildTree3([1,2,3,null,4]);
export function buildTree3(arr, i = 0) {
    if (i >= arr.length || arr[i] === null) return null;

    const node = new TreeNode(arr[i]);
    node.left = buildTree(arr, 2 * i + 1);
    node.right = buildTree(arr, 2 * i + 2);
    return node;
}


//生成树：层序方式+队列
export function buildTree4(arr) {
    if (!arr.length) return null;
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;
    while (i < arr.length) {
        const node = queue.shift();
        if (arr[i] != null) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;
        if (arr[i] != null) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }
    return root;
}

//前序+null [1, 2, null, null, 3, 4, null, null, null]
export function buildTree5(arr) {
    let index = 0;

    function dfs() {
        if (index >= arr.length) return null;

        const val = arr[index++];
        if (val === null) return null;

        const node = new TreeNode(val);
        node.left = dfs();
        node.right = dfs();
        return node;
    }

    return dfs();
}

//从有序数组构建平衡 BST（必备）
export function BSTBuid(nums) {
    function build(left, right) {
        if (left > right) return null;

        const mid = Math.floor((left + right) / 2);
        const node = new TreeNode(nums[mid]);

        node.left = build(left, mid - 1);
        node.right = build(mid + 1, right);

        return node;
    }

    return build(0, nums.length - 1);
};

//插入
export function BSTInsertNode(root, val) {
    if (root === null) {
        return new TreeNode(val);
    }

    if (val < root.val) {
        root.left = BSTInsertNode(root.left, val);
    } else if (val > root.val) {
        root.right = BSTInsertNode(root.right, val);
    }

    return root;
}

//删除
export function BSTDeleteNode(root, key) {
    if (root === null) return null;

    if (key < root.val) {
        root.left = BSTDeleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = BSTDeleteNode(root.right, key);
    } else {
        // 找到了要删除的节点
        if (!root.left && !root.right) {
            return null;
        }

        if (!root.left) return root.right;
        if (!root.right) return root.left;

        // 情况 3：两个子节点
        let successor = root.right;
        while (successor.left) {
            successor = successor.left;
        }

        root.val = successor.val;
        root.right = BSTDeleteNode(root.right, successor.val);
    }

    return root;
}
