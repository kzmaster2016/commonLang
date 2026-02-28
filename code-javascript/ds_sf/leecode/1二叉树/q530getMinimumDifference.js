/**
前提是一个二叉搜索树
中序遍历结果是一个递增有序序列

最小差值一定出现在“相邻两个节点”之间
所以问题就变成了：
在一个有序序列中，找相邻元素的最小差值 
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let minDiff = Infinity;
    let prev = null;
    function inorder(node) {
        if (node === null) return;
        inorder(node.left);//含序列的起点
        if (prev !== null) {
            minDiff = Math.min(minDiff, node.val - prev);
        }
        prev = node.val;
        inorder(node.right);//含序列的终点
    }
    inorder(root);
    return minDiff;
};