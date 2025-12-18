/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
import * as m from "./tools.js";

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    function validate(node, low, high) {
        console.log("validate node:", node ? node.val : null, "low:", low, "high:", high);
        if (node === null) return true;
        if (node.val <= low || node.val >= high) return false;

        return validate(node.left, low, node.val) && validate(node.right, node.val, high);
        //不存在所谓 对称遍历，因为入口只有一个节点
        //本质是前序遍历
        // let validL = validate(node.left, low, node.val);
        // let validR = validate(node.right, node.val, high);
        // return validL && validR;
    }
    
    return validate(root, -Infinity, Infinity);  
};

//中序遍历也能实现；
let prev = -Infinity;
function isValidBSTByInorder(node) {
    if (!node) return true;

    if (!isValidBSTByInorder(node.left)) return false;
    console.log(prev);
    if (node.val <= prev) return false;
    prev = node.val;//在这里交棒
    console.log(prev);

    return isValidBSTByInorder(node.right);
}


// let arr = [10,8,15,7,9,11,16];
let arr = [8,4,12,2,6,10,14,1,3,5,7,9,11,13,15];
let root =  m.buildTree4(arr);

m.printTree(root);
m.printTree3(root);

console.log("isValidBST:", isValidBSTByInorder(root));

