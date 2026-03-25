## 一、贪心算法统一思维图
贪心算法
│
├─ 1 区间扩展（Range Expansion）
│
├─ 2 前缀最值（Prefix Min/Max）
│
├─ 3 局部最优（Local Optimal）
│
└─ 4 排序贪心（Sort + Greedy）

每一类我给你 核心思想 + 典型题 + 判断方法。

## 二、区间扩展（Range Expansion）
核心思想
维护当前能到达的最远边界
不断扩展范围

一般变量：
curRight
nextRight

```js
模板
let curRight = 0
let nextRight = 0

for (let i = 0; i < n; i++) {
    nextRight = Math.max(nextRight, i + nums[i])

    if (i === curRight) {
        curRight = nextRight
        step++
    }
}
```

## 三、前缀最值（Prefix Min/Max）
核心思想
prefix[j] - prefix[i]

维护：
最小前缀
最大前缀

模板
```js
let prefix = 0
let minPrefix = 0
let ans = -Infinity

for (let x of nums) {
    prefix += x
    ans = Math.max(ans, prefix - minPrefix)
    minPrefix = Math.min(minPrefix, prefix)
}
```

## 四、局部最优（Local Optimal）
核心思想
每一步都做当前最优选择

不需要全局信息。

模板

通常是：
```js
for (...) {
    if (当前更优) {
        更新答案
    }
}
``
## 五、排序贪心（Sort + Greedy）
核心思想
先排序
再贪心选择

因为顺序会影响最优解。

模板
```js
nums.sort((a,b)=>a-b)

for (let x of nums) {
    if (满足条件) {
        选择
    }
}
```