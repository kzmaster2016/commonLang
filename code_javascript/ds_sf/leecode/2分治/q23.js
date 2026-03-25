//  合并 K 个升序链表
import { mergeList } from "../1链表/link.js";
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0) return null;
    let mid = Math.floor(lists.length / 2);
    if (mid === 0) return lists[0];
    return mergeList(mergeKLists(lists.slice(0, mid)), mergeKLists(lists.slice(mid)));
};

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(0);
    let r = dummy;
  
    while (l1 && l2) {
        if (l1.val < l2.val) {
            r.next = l1;
            l1 = l1.next;
        } else {
            r.next = l2;
            l2 = l2.next;
        }
        r = r.next;
    }
    if (l1) r.next = l1;
    if (l2) r.next = l2;
    return dummy.next;
}