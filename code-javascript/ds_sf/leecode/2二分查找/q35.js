/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    let mid = Math.floor((left+right)/2);

    while( left <= right ){
        if(nums[mid] === target) return mid;
        else if(target<nums[mid] ) right = mid-1;
        else left = mid+1;
        mid = Math.floor((left+right)/2);
    }

    //就是边界有点模糊

    return left;
};
console.log( searchInsert([1,3,5,6],5) ); //2
console.log( searchInsert([1,3,5,6],2) ); //1

console.log( searchInsert([1,3],3) ); 