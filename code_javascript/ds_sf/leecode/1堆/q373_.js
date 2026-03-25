/**
 * 查找和最小的 K 对数字
给定两个以 非递减顺序排列 的整数数组 nums1 和 nums2 , 以及一个整数 k 。

定义一对值 (u,v)，其中第一个元素来自 nums1，第二个元素来自 nums2 。

请找到和最小的 k 个数对 (u1,v1),  (u2,v2)  ...  (uk,vk) 。
 */
import { Heap, HeapFn } from "./heap.js";

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    if (!nums1.length || !nums2.length || k === 0) return [];

    // 使用小顶堆，元素为 [sum, i, j]
    const heap = new HeapFn((a, b) => a[0] < b[0]);
    const res = [];

    // 只需要为前 k 个 nums1 元素初始化，因为每次出堆只会推进对应的 nums2 下标
    const n1 = nums1.length;
    const n2 = nums2.length;
    const m = Math.min(k, n1);
    for (let i = 0; i < m; i++) {
        heap.push([nums1[i] + nums2[0], i, 0]);
    }

    while (!heap.isEmpty() && res.length < k) {
        const top = heap.pop();
        const sum = top[0];
        const i = top[1];
        const j = top[2];

        res.push([nums1[i], nums2[j]]);

        if (j + 1 < n2) {
            heap.push([nums1[i] + nums2[j + 1], i, j + 1]);
        }
    }

    return res;
};

 