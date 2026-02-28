/**

填充每个节点的下一个右侧节点指针 II
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    if (!root) return null;

    let cur = root; // 当前层第一个节点

    while (cur) {
        // dummy 用来构建下一层的 next 链
        let dummy = new _Node(0);
        let tail = dummy;

        // 遍历当前层
        while (cur) {
            if (cur.left) {
                tail.next = cur.left;
                tail = tail.next;
            }
            if (cur.right) {
                tail.next = cur.right;
                tail = tail.next;
            }
            cur = cur.next;
        }

        // 跳到下一层
        cur = dummy.next;
    }

    return root;
};