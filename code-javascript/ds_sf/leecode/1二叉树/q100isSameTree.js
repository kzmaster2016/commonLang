
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (p === null && q === null) {
        return true;
    }
    if (p === null || q === null) {
        return false;
    }
    if (p.val !== q.val) {
        return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);  
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *   this.val = (val===undefined ? 0 : val)
 *  
 *  this.left = (left===undefined ? null : left)    
 *  this.right = (right===undefined ? null : right)
 *      }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true; 
    const isMirror = (t1, t2) => {
        if (!t1 && !t2) return true;
        if (!t1 || !t2) return false;
        return (t1.val === t2.val) && isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
    }
    return isMirror(root.left, root.right);
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *  
 *   this.val = (val===undefined ? 0 : val)
 *    this.left = (left===undefined ? null : left)
 *  
 *  
 *   this.right = (right===undefined ? null : right)    
 *  }
 * /
 * /**
 * @param {TreeNode} root
 * @return {number[]}
 * /
 * var inorderTraversal = function(root) {
 *   const result = []; 
 *   const inorder = (node) => {
 *      if (!node) return;
 *     inorder(node.left);
 *    result.push(node.val);
 *   inorder(node.right);
 *  }
 *  inorder(root);
 *  return result;
 * };

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *  
 *  
 *   this.val = (val===undefined ? 0 : val) 
 *   this.left = (left===undefined ? null : left)   
 *  this.right = (right===undefined ? null : right)
 *  }
 * */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * /
 * 