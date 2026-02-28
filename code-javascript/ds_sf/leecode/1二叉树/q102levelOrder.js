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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    let queue = [root];
    let res = [];
    while(queue.length){
        
        let size = queue.length;
        let level = [];
        for(let i =0;i<size;i++){
            let node = queue.shift();
            level.push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        console.log(...level);
        res.push(level);
    }
    return res;
};

//自底向上1
var levelOrderBottom = function(root) {
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

    return res.reverse();
};

var levelOrderBottom2 = function(root) {
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

        res.unshift(level); // 👈 关键
    }

    return res;
};



import * as m from "./tools.js";
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let root =  m.buildTree4(arr);
m.printTree(root);
m.printTree3(root);
console.log("zigzagLevelOrder:", levelOrder(root));