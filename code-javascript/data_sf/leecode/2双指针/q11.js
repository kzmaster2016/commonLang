/**
最大面面积
给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

返回容器可以储存的最大水量。
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0, r = height.length - 1;
    let maxArea = 0;

    while (l < r) {
        let area = Math.min(height[l], height[r]) * (r - l);
        console.log(`l=${l}, r=${r}, area=${area}`);
        maxArea = Math.max(maxArea, area);

    
        //指针变化的规则：移动较短的那一边，因为移动较长的那一边不可能获得更大的面积
        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
        //r-l会越来越小，所以想要获得更大的面积，必须提高较短边的高度
    }

    return maxArea;
};

// 测试用例
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
// console.log(maxArea([1,1])); // 1
// console.log(maxArea([4,3,2,1,4])); // 16
// console.log(maxArea([1,2,1])); // 2
// console.log(maxArea([1,3,2,5,25,24,5])); // 24