/**
 * x的平方根，
 * x是非负整数，
 * 二分查找
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x===0) return 0;
    if(x===1) return 1;
    
    let left = 1;
    let right = x;
    let ans = 0;
    
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(mid * mid <= x) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return ans;
};