/**
 * 链表排序
 */

import { ListNode,mergeList } from "../1链表/link.js";
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (!head || !head.next) return head;

    // 找中点并断链
    let slow = head, fast = head, prev = null;
    while (fast && fast.next) {
        prev = slow;//左链表尾节点
        slow = slow.next;//右链表头节点
        fast = fast.next.next;
    }
    prev.next = null;

    let left = sortList(head);
    let right = sortList(slow);

    return mergeList(left, right);
};