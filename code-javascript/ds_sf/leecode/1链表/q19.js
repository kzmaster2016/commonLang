/**
 * 19. 删除链表的倒数第 N 个结点
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(0, head);
    let fast = dummy, slow = dummy;

    for (let i = 0; i < n; i++) {
        if(fast.next){
            fast = fast.next;
        }else{
            return null;
        }
    }

    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    //删除slow
    slow.next = slow.next.next;

    return dummy.next;
};