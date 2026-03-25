/**
 * 82. 删除排序链表中的重复元素 II
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
var deleteDuplicates = function(head) {
    // let dummy = new ListNode(0, head);
    //或
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    let curr = head;

    
    while (curr) {
        while (curr.next && curr.next.val === curr.val) {
            curr = curr.next;
        }

        // if (prev.next.val !== curr.val) {//有隐藏bug

        //中间有重复
        if (prev.next !== curr) {
            //这一句是真正删除重复节点的关键
            prev.next = curr.next;

            // curr 始终是扫描指针，而 prev 是确认指针
            // 两者本来就不要求保持相对位置一致
            // 单向链表中，真正能 删除 的，永远是持有前驱的那个指针。
        } else {
            //修改前节点自身
            prev = prev.next;
        }
        curr = curr.next;
    }
    return dummy.next;
};