/**
 * 两数相加
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // 虚拟头节点（简化头节点处理）
    const dummy = new ListNode(0);
    // 当前指针，用于构建结果链表
    let curr = dummy;
    // 进位初始化为0
    let carry = 0;

    // 循环条件：l1/l2未遍历完，或仍有进位
    while (l1 !== null || l2 !== null || carry !== 0) {
        // 取出当前节点值，为空则取0
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;

        // 计算当前位总和（值1 + 值2 + 进位）
        const total = val1 + val2 + carry;
        // 更新进位（整除10）
        carry = Math.floor(total / 10);
        // 创建新节点存储当前位结果（取余10）
        curr.next = new ListNode(total % 10);
        // 移动当前指针到新节点
        curr = curr.next;

        // 移动l1/l2指针（不为空时才移动）
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    // 虚拟头节点的下一个节点是结果链表的头
    return dummy.next;
};