
import * as m from "./tools.js";

// console.log(m.default, m.inorder, m.postorder, m.levelOrder);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let root = m.buildTree4(arr);

console.log("前序遍历:", m.preorder(root));
console.log("前序遍历2:", m.preorder2(root));
console.log("中序遍历:", m.inorder(root));
console.log("中序遍历2:", m.inorder2(root));
console.log("后序遍历:", m.postorder(root));
console.log("后序遍历2:", m.postorder2(root));
// console.log("层序遍历:", m.levelOrder(root));
// console.log("对称遍历:", [root.val].concat(m.symmetryOrder(root.left, root.right)));

// m.printTree(root);
m.printTree3(root);
console.log(m.binaryTreePaths(root));


