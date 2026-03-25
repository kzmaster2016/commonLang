/**
 * 86. 分隔链表
 * 分隔链表
给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
你应当 保留 两个分区中每个节点的初始相对位置。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let dummy = new ListNode(0, head);
    let small = dummy;
    let big = dummy;
    while (head) {
        if (head.val < x) {
            small.next = head;
            small = small.next;
        } else {
            big.next = head;
            big = big.next;
        }
        head = head.next;
    }
    big.next = null;
    small.next = dummy.next;
    return dummy.next;
};

//其他解法


var partition2 = function(head, x) {
    //找到值为x的节点

    //遍历链表

    //移动节点，将小于x的节点放在前面，大于等于x的节点放在后面(画图)

    //返回新的头节点

    let dummySmall = new ListNode(-1);
    let dummyBigger = new ListNode(-1);
    let small = dummySmall;//小于x的节点的尾部
    let bigger = dummyBigger; 
    while (cur) {
        if (cur.val < x) {
            small.next = cur;
            small = small.next;
        } else {
            bigger.next = cur;
            bigger = bigger.next;
        }
        cur = cur.next;
    }
    small.next = dummyBigger.next;
    bigger.next = null;
    return dummySmall.next;
};
 
