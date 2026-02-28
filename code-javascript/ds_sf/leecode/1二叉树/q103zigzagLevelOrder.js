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
var zigzagLevelOrder = function (root) {
    if (!root) return [];
    let queue = [root];
    let res = [];
    let leftToRight = true; // 标记当前层的遍历方向 
    while (queue.length) {

        let size = queue.length;
        let level = [];
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            if (leftToRight) {
                level.push(node.val);
            } else {
                level.unshift(node.val);
            }
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        console.log("level:", ...level);
        res.push(level);
        leftToRight = !leftToRight;
    }
    return res;
};

//双栈法：
var zigzagLevelOrder2 = function(root) {
    if (!root) return [];

    const res = [];
    let stackLR = [root]; // 左 -> 右
    let stackRL = [];     // 右 -> 左

    while (stackLR.length || stackRL.length) {

        // 当前层：左 -> 右
        const levelLR = [];
        while (stackLR.length) {
            const node = stackLR.pop();
            levelLR.push(node.val);

            // ⚠️ 关键：先左后右，压到另一个栈
            if (node.left) stackRL.push(node.left);
            if (node.right) stackRL.push(node.right);
        }
        if (levelLR.length) {
            console.log(...levelLR);
            res.push(levelLR);
        }

        // 当前层：右 -> 左
        const levelRL = [];
        while (stackRL.length) {
            const node = stackRL.pop();
            levelRL.push(node.val);

            // ⚠️ 关键：先右后左，压回第一个栈
            if (node.right) stackLR.push(node.right);
            if (node.left) stackLR.push(node.left);
        }
        if (levelRL.length) {
            console.log(...levelRL);
            res.push(levelRL);
        }
    }

    return res;
};

//单栈
var zigzagLevelOrder3 = function(root) {
    if (!root) return [];

    const res = [];
    let stack = [root];
    let leftToRight = true;

    while (stack.length) {
        //其实是 对队列进行分层，非常重要
        const size = stack.length;
        const level = [];
        const nextLevel = [];

        for (let i = 0; i < size; i++) {
            const node = stack.pop();
            level.push(node.val);

            if (leftToRight) {
                if (node.left) nextLevel.push(node.left);
                if (node.right) nextLevel.push(node.right);
            } else {
                if (node.right) nextLevel.push(node.right);
                if (node.left) nextLevel.push(node.left);
            }
        }

        // 下一层整体入栈（保证层不混）
        stack = nextLevel;
        console.log(...level);
        res.push(level);
        leftToRight = !leftToRight;
    }

    return res;
};


import * as m from "./tools.js";
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let root =  m.buildTree4(arr);
m.printTree(root);
m.printTree3(root);
console.log("zigzagLevelOrder:", zigzagLevelOrder3(root));