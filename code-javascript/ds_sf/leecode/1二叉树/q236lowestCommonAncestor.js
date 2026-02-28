/**
最近公共祖先
 */
import * as m from './tools.js'

/**
 * @param {TreeNode} node
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
let cnt = 0;
var lowestCommonAncestor = function (node, p, q) {
    cnt++;

    if (!node) {
        return node;
    }
    //当前节点负责“判”子树负责“找”
    // if (node.val === p.val || node.val === q.val) {
    //     return node;
    // }

    //写在前面的都是前序的，一定会先被执行
    // 子树负责“找”
    const left = lowestCommonAncestor(node.left, p, q);

    //写在中间的是中序
    const right = lowestCommonAncestor(node.right, p, q);

    // 当前节点负责“判”
    if (left && right) {
        return node;
    }

    // 父节点只负责“传”
    return left ? left : right;
};

/**
子树负责“找”
当前节点负责“判”
父节点只负责“传”
 * 二叉树后序遍历递归拆解
 * 1，如果root是null,返回null
 * 1，如果node是一个叶子节点：1返回自身（等于p或q）；2，返回null
*/
//test
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let root = m.buildTree4(arr);
m.printTree3(root);

let p = new m.default(2);
let q = new m.default(3);

// let p = new m.default(14);
// let q = new m.default(13);
console.log('--', lowestCommonAncestor(root, p, q), cnt);
