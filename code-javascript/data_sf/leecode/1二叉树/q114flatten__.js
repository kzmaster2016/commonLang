/**
 * 转链表
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {

    function dfs(node) {
        if (!node) return null;

        // 展开左右子树
        const leftTail = dfs(node.left);
        const rightTail = dfs(node.right);

        // 如果有左子树
        if (leftTail) {
            // 左子树接到右边
            leftTail.right = node.right;
            node.right = node.left;
            node.left = null;
        }

        // 返回当前链表的尾节点
        return rightTail || leftTail || node;
    }

    dfs(root);
};