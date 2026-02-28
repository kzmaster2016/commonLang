//给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 小的元素（从 1 开始计数）。
/**
前提是二叉搜索树
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
//使用了栈的 中序遍历
var kthSmallest = function(root, k) {
    let stack = [];
    let curr = root;
    let count = 0;
    while (curr || stack.length) {
        //压栈
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        //出栈
        curr = stack.pop();
        count++;
        if (count === k) return curr.val;
        curr = curr.right;
    }  
};

//使用递归的 中序遍历
var kthSmallest2 = function(root, k) {
    let count = 0;
    let result = null;

    function inorder(node) {
        if (!node || result !== null) return;

        inorder(node.left);

        count++;
        if (count === k) {
            result = node.val;
            return;
        }

        inorder(node.right);
    }

    inorder(root);
    return result;
};