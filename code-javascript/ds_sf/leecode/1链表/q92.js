/**
 * 翻转链表2： 区间翻转
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let m = left;
    let n = right;
    if (!head || m === n) return head;

    let dummy = new ListNode(0);
    dummy.next = head;

    // 1️⃣ 找到 pre（m 的前一个）
    let pre = dummy;
    for (let i = 1; i < m; i++) {
        pre = pre.next;
    }

    // 2️⃣ start 指向第 m 个节点
    let start = pre.next;
    let then = start.next;

    /**
     * 区间反转：
        pre 固定，入口,
        start 固定，尾巴
        then 不断头插
     */

    // 3️⃣ 进行 n-m 次头插
    for (let i = 0; i < n - m; i++) {
        start.next = then.next;//固定尾巴:链接后面的尾部不丢失
        then.next = pre.next;//修改头部
        pre.next = then;//设置头部
        then = start.next;//移动游标
    }

    return dummy.next;
};