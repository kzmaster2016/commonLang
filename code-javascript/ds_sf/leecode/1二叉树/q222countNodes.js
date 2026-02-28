/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
    if (!root) return 0;
    const leftDepth = getLeftDepth(root);
    const rightDepth = getRightDepth(root);
    if (leftDepth === rightDepth) { 
        return (2 ** leftDepth) - 1;
    }
    return 1 + countNodes(root.left) + countNodes(root.right);
};
function getLeftDepth(node) {
    let depth = 0;  
    while (node) {
        depth++;
        node = node.left;
    }
    return depth;
}
function getRightDepth(node) {
    let depth = 0;
    while (node) {
        depth++;
        node = node.right;
    }
    return depth;
}

var countNodes2 = function (root) {
    function dfs(node) {
        if (node === null) {
            return 0;
        }
        return 1 + dfs(node.left)+dfs(node.right);
    }
    return dfs(root);
};