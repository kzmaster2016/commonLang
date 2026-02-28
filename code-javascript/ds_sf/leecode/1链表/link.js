export function ListNode(val) {
    this.val = val;
    this.next = null;
}

//-----------链表的常见操作-----------

//头部插入：node
export function insertAtHead(head, node) {
    node.next = head;
    head = node;
    return head;
}



//尾部插入：node：先遍历完再插入
export function insertAtTail(head, node) {
    if (head === null) {
        return node;
    }

    let cur = head;
    //cur指向最后一个节点；
    while (cur.next !== null) {
        cur = cur.next;
    }
    //cur最终是null，尾节点在循环体里面
    // while (cur !== null) {
    //     cur = cur.next;
    // }
    cur.next = node;
    return head;
}


//中间插入：指定值 val|node.val （升序）

export function insertInOrder(head, node) {
    if (head === null || head.val >= node.val) {
        node.next = head;
        return node;
    }
    let cur = head;
    while (cur.next !== null && cur.next.val < node.val) {
        cur = cur.next;
    }
    //cur.next ===null || cur.next.val >= node.val 时进行插入
    node.next = cur.next;
    cur.next = node;
    return head;

}


//中间插入：指定位置 index
export function insertAtIndex(head, node, index) {
    if (index === 0) {
        node.next = head;
        return node;
    }

    let cur = head;
    let pos = 0;
    //如果index超过链表长度，则插入到末尾
    while (pos < index - 1 && cur.next !== null) {
        cur = cur.next;
        pos++;
    }

    node.next = cur.next;
    cur.next = node;
    return head;
}


//删除：无前驱
export function deleteNode(node) {
    if (node === null || node.next === null) {
        return;
    }
    //没有前驱的原地删除，只能把下一个节点的值覆盖到当前节点，然后删除下一个节点
    node.val = node.next.val;
    node.next = node.next.next;

}


//删除：指定值 val
export function deleteByValue(head, val) {
    if (head === null) {
        return head;
    }
    if (head.val === val) {
        return head.next;
    }
    let cur = head;
    while (cur.next !== null) {
        //实际删除的是 cur.next
        if (cur.next.val === val) {
            cur.next = cur.next.next;
            break;
        }
        cur = cur.next;
    }
    return head;
}


//删除：指定位置 index
export function deleteAtIndex(head, index) {
    if (index === 0) {
        return head.next;
    }
    let cur = head;
    let pos = 0;
    //如果index超过链表长度，则不进行删除
    while (pos < index - 1 && cur.next !== null) {
        cur = cur.next;
        pos++;
    }
    while (pos < index - 1) {
        cur = cur.next;
        pos++;
    }
    cur.next = cur.next.next;
    return head;
}

//修改：指定值
export function updateValue(head, oldVal, newVal) {
    let cur = head;
    while (cur !== null) {
        if (cur.val === oldVal) {
            cur.val = newVal;
            break;
        }
        cur = cur.next;
    }
    return head;
}

//修改：指定位置
export function updateAtIndex(head, index, newVal) {
    let cur = head;
    let pos = 0;

    // 如果index超过链表长度，则不进行修改
    while (cur !== null) {
        if (pos === index) {
            cur.val = newVal;
            break;
        }
        cur = cur.next;
        pos++;
    }
    return head;
}


//遍历
function traverse(head) {
    let cur = head;
    while (cur !== null) {
        console.log(cur.val);
        cur = cur.next;
    }
}

// 虚拟头节点（超级重要）
function createDummyNode() {
    let dummy = new ListNode(0);
    dummy.next = head;
    return dummy;
}


// // 示例链表创建
// let head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(4);
// head.next.next.next.next = new ListNode(5);
// //遍历示例
// traverse(head);


// 将一个数组转换为链表
function arrayToLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// 示例
let arr = [1, 2, 3, 4, 5];
let head = arrayToLinkedList(arr);
traverse(head);

head = insertAtHead(head, new ListNode(11));
traverse(head);




// 合并两个有序链表
export function mergeList(l1, l2) {
    let dummy = new ListNode(0);
    let cur = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }

    cur.next = l1 || l2;
    return dummy.next;
}

//排序1
var sortLink = function (head) {
    if (!head || !head.next) return head;

    // 找中点并断链
    let slow = head, fast = head, prev = null;
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = null;

    let left = sortList(head);
    let right = sortList(slow);

    return mergeList(left, right);
};


//链表排序2：借助数组
function sortLink2(head) {
    if (head === null || head.next === null) {
        return head;
    }
    let nodes = [];
    let cur = head;
    while (cur !== null) {
        nodes.push(cur);
        cur = cur.next;
    }
    nodes.sort((a, b) => a.val - b.val);
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }
    nodes[nodes.length - 1].next = null;
    return nodes[0];
}

//反转：非常重要
function reverseList(head) {
    let pre = null;
    let cur = head;
    while (cur !== null) {
        let next = cur.next;

        cur.next = pre;
        pre = cur;//和上面一行，一起为已翻转的节点累计

        cur = next;//往下继续走

        //只要循环未结束，原链表其实已经被分割成 已翻转的节点prev 和未翻转的节点cur
    }
    return pre;

}


// 快慢指针:中间节点
function findMiddleNode(head) {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

// 快慢指针：环检测是否有环和环的入口节点
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



//交换：指定2个节点
function swapNodes(head, node1, node2) {
    if (node1 === node2) return head;
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev1 = dummy, prev2 = dummy;

    while (prev1.next && prev1.next !== node1) {
        prev1 = prev1.next;
    }
    while (prev2.next && prev2.next !== node2) {
        prev2 = prev2.next;
    }

    //有节点不存在
    if (prev1.next === null || prev2.next === null) return head;

     // ⭐ 相邻情况：node1 在前
    if (node1.next === node2) {
        prev1.next = node2;
        node1.next = node2.next;
        node2.next = node1;
        return dummy.next;
    }

    // ⭐ 相邻情况：node2 在前
    if (node2.next === node1) {
        prev2.next = node1;
        node2.next = node1.next;
        node1.next = node2;
        return dummy.next;
    }

    let temp = node2.next;
    node2.next = node1.next;
    node1.next = temp;
    prev1.next = node2;
    prev2.next = node1;
    return dummy.next;
}





// 总结删除就想1️⃣ dummy 2️⃣ 倒数就想快慢 3️⃣ 反转就想三指针 4️⃣ 排序就用归并 5️⃣ 交换就是改 next 快慢指针解决一半问题
