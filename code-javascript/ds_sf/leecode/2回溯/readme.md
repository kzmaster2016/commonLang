## 回溯5大模型
1. 组合
2. 子集
3. 排列
4. 分割
5. 搜索
| 模型 | 核心约束       | 是否有 start | 是否可重复 | 是否剪枝  |
| -- | ---------- | --------- | ----- | ----- |
| 组合 | 选 k 个，不看顺序 | ✅         | ❌     | ✅     |
| 子集 | 选或不选       | ✅         | ❌     | ❌（通常） |
| 排列 | 顺序重要       | ❌         | ❌     | ❌     |
| 分割 | 切字符串       | index     | 取决于题意 | ✅     |
| 搜索 | 找目标        | 取决于路径     | 取决于   | ✅     |

### 组合
```js
function backtrack(start) {
    if (path.length === k) {
        res.push([...path]);
        return;
    }

    for (let i = start; i <= n; i++) {
        path.push(i);
        backtrack(i + 1);
        path.pop();
    }
}
```

### 子集
```js
function backtrack(start) {
    res.push([...path]);

    for (let i = start; i < nums.length; i++) {
        path.push(nums[i]);
        backtrack(i + 1);
        path.pop();
    }
}

```
### 排列
```js
function backtrack() {
    if (path.length === nums.length) {
        res.push([...path]);
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        if (used[i]) continue;

        used[i] = true;
        path.push(nums[i]);
        backtrack();
        path.pop();
        used[i] = false;
    }
}

```
### 分割模型
```js
function backtrack(start) {
    if (start === s.length) {
        res.push([...path]);
        return;
    }

    for (let end = start; end < s.length; end++) {
        if (!isValid(start, end)) continue; // ⭐ 剪枝

        path.push(s.slice(start, end + 1));
        backtrack(end + 1);
        path.pop();
    }
}

```
### 搜索模型
```js
function backtrack(state) {
    if (found) return;

    if (满足条件) {
        记录结果;
        return;
    }

    for (选择 in choices) {
        if (非法) continue; // ⭐ 剪枝
        做选择
        backtrack(newState)
        撤销选择
    }
}

```
