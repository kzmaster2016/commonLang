export class Heap {
    constructor(comparator = (a, b) => a < b) {
        this.data = [];
        this.comparator = comparator;
    }

    /* ========== 基础工具方法 ========== */
    size() {
        return this.data.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    peek() {
        return this.data[0];
    }

    swap(i, j) {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
    }

    // 父节点
    parent(i) {
        return (i - 1) >> 1;
    }

    // 左子节点
    left(i) {
        return i * 2 + 1;
    }

    // 右子节点
    right(i) {
        return i * 2 + 2;
    }

    /* ========== 核心操作 ========== */

    // 插入元素 O(log n)
    push(val) {
        this.data.push(val);
        this.siftUp(this.size() - 1);
    }

    // 删除堆顶 O(log n)
    pop() {
        if (this.isEmpty()) return undefined;

        const top = this.peek();
        const last = this.data.pop();

        if (!this.isEmpty()) {
            this.data[0] = last;
            this.siftDown(0);
        }

        return top;
    }

    /* ========== 调整函数 ========== */

    siftUp(i) {
        while (i > 0) {
            const p = this.parent(i);
            if (this.comparator(this.data[i], this.data[p])) {
                this.swap(i, p);
                //继续上浮
                i = p;
            } else {
                //  没有发生交换，可以终止上浮
                break;
            }
        }
    }

    siftDown(i) {
        const n = this.size();
        while (true) {
            let best = i;
            const l = this.left(i);
            const r = this.right(i);

            //n是最大下标
            if (l < n && this.comparator(this.data[l], this.data[best])) {
                best = l;
            }
            if (r < n && this.comparator(this.data[r], this.data[best])) {
                best = r;
            }

            if (best !== i) {
                this.swap(i, best);
                //继续下层
                i = best;
            } else {
                //没有发生交换，可以终止下层
                break;
            }
        }
    }

    /* ========== 扩展操作 ========== */

    // O(n) 建堆（非常重要）
    heapify(arr) {
        this.data = arr.slice();
        //不需要从叶子结点开始，因为叶子结点没有子节点
        for (let i = (this.size() - 2) >> 1; i >= 0; i--) {
            this.siftDown(i);
        }
    }

    //逐个插入+上浮：效率相对较低
    heapify2(arr) {
        this.data = arr.slice();
        for (let i = 0; i < this.size(); i++) {
            this.siftUp(i);
        }
    }
}

//test
//小顶堆
const heapMin = new Heap((a, b) => a < b);
heapMin.push(1);
heapMin.push(2);
heapMin.push(3);
heapMin.push(4);
heapMin.push(5);
console.log(heapMin.pop());

//初始化堆
heapMin.heapify([6, 7, 8]);
console.log(heapMin.pop());

//大顶堆
const heapMax = new Heap((a, b) => a > b);
heapMax.push(1);
heapMax.push(2);
heapMax.push(3);
heapMax.push(4);
heapMax.push(5);
console.log(heapMax.pop());


export function HeapFn(comparator = (a, b) => a < b) {
    this.data = [];
    this.comparator = comparator;
}

/* ========== 基础工具方法 ========== */
HeapFn.prototype.size = function () {
    return this.data.length;
}

HeapFn.prototype.isEmpty = function () {
    return this.size() === 0;
}

HeapFn.prototype.peek = function () {
    return this.data[0];
}

HeapFn.prototype.swap = function (i, j) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
}

// 父节点
HeapFn.prototype.parent = function (i) {
    return (i - 1) >> 1;
}

// 左子节点
HeapFn.prototype.left = function (i) {
    return i * 2 + 1;
}

// 右子节点
HeapFn.prototype.right = function (i) {
    return i * 2 + 2;
}

/* ========== 核心操作 ========== */

// 插入元素 O(log n)
HeapFn.prototype.push = function (val) {
    this.data.push(val);
    this.siftUp(this.size() - 1);
}

// 删除堆顶 O(log n)
HeapFn.prototype.pop = function () {
    if (this.isEmpty()) return undefined;

    const top = this.peek();
    const last = this.data.pop();

    if (!this.isEmpty()) {
        this.data[0] = last;
        this.siftDown(0);
    }

    return top;
}

/* ========== 调整函数 ========== */

HeapFn.prototype.siftUp = function (i) {
    while (i > 0) {
        const p = this.parent(i);
        if (this.comparator(this.data[i], this.data[p])) {
            this.swap(i, p);
            //继续上浮
            i = p;
        } else {
            //  没有发生交换，可以终止上浮
            break;
        }
    }
}

HeapFn.prototype.siftDown = function (i) {
    const n = this.size();
    while (true) {
        let best = i;
        const l = this.left(i);
        const r = this.right(i);

        //n是最大下标
        if (l < n && this.comparator(this.data[l], this.data[best])) {
            best = l;
        }
        if (r < n && this.comparator(this.data[r], this.data[best])) {
            best = r;
        }

        if (best !== i) {
            this.swap(i, best);
            //继续下层
            i = best;
        } else {
            //没有发生交换，可以终止下层
            break;
        }
    }
}

/* ========== 扩展操作 ========== */

// O(n) 建堆（非常重要）
HeapFn.prototype.heapify = function (arr) {
    this.data = arr.slice();
    //不需要从叶子结点开始，因为叶子结点没有子节点
    for (let i = (this.size() - 2) >> 1; i >= 0; i--) {
        this.siftDown(i);
    }
}

//逐个插入+上浮：效率相对较低
HeapFn.prototype.heapify2 = function (arr) {
    this.data = arr.slice();
    for (let i = 0; i < this.size(); i++) {
        this.siftUp(i);
    }
}
