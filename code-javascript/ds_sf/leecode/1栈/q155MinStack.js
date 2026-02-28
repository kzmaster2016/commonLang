


var MinStack = function() {
    this.mainStack = [];
    this.minStack = [];
};

MinStack.prototype.push = function(val) {
    this.mainStack.push(val);
    // 优化：仅当辅助栈为空 或 val 小于等于辅助栈顶时，才压入辅助栈
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val);
    }
};

MinStack.prototype.pop = function() {
    const topVal = this.mainStack.pop();
    // 优化：仅当弹出的主栈顶元素 === 辅助栈顶元素时，才弹出辅助栈顶
    if (topVal === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};

MinStack.prototype.top = function() {
    return this.mainStack[this.mainStack.length - 1];
};

MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};