/**
 * 61. 旋转链表 
 * 每个节点像右移动k个位置
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    // 边界条件：空链表、只有1个节点、k=0，直接返回原链表
    if (!head || !head.next || k === 0) {
        return head;
    }

    // 步骤1：遍历链表，计算长度n，找到尾节点tail
    let n = 1; // 至少有1个节点（已过滤空链表）
    let tail = head;
    while (tail.next) {
        tail = tail.next;
        n++;
    }

    // 步骤2：简化k值，若k%n=0，旋转后和原链表一致
    k = k % n;
    if (k === 0) {
        return head;
    }

    // 步骤3：将链表连成环（尾节点指向头节点）
    tail.next = head;

    // 步骤4：找到新的尾节点（从tail出发走 n - k 步）
    let newTail = tail;
    for (let i = 0; i < n - k; i++) { //如果是走k步，相当于是往左移动k步，
        newTail = newTail.next;
    }

    // 步骤5：找到新头节点，并断开环
    const newHead = newTail.next;
    newTail.next = null;

    return newHead;
};