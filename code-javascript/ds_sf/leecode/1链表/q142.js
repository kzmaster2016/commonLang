import { ListNode } from './link.js';
/**
环的入口节点

给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 仅用于标识环的情况，并不会作为参数传递到函数中。
说明：不允许修改给定的链表。
示例 1：
输入：head = [3,2,0,-4], pos = 1

*/



/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    if (head === null || head.next === null) return null;

    let slow = head;
    let fast = head;

    // 第一步：判断是否有环
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            // 第二步：找入口
            let ptr1 = head;
            let ptr2 = slow;

            while (ptr1 !== ptr2) {
                ptr1 = ptr1.next;
                ptr2 = ptr2.next;
            }

            return ptr1;
        }
    }

    return null;
};

//test
let head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);
head.next.next.next.next = head.next; // Create a cycle
console.log(detectCycle(head).val); // Output: 2