/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
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