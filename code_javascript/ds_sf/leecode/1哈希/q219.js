

//219. 存在重复元素 II
//给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的下标 i 和 j ，
//使得 nums[i] == nums[j] 且 abs(i - j) <= k 。
//如果存在，返回 true ；否则，返回 false 。
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let prevIndex = map.get(nums[i]);   
            if (i - prevIndex <= k) {
                return true;
            }
        }
        map.set(nums[i], i);
    }
    return false;
};
//暴力解法
var containsNearbyDuplicate1 = function(nums, k) {
    let map = new Map(); 
    let i=0;
    let j=1;

    for (;i < nums.length-1;) {
        // map.set(nums[i], i);
        for(;j < nums.length;){
            if(nums[i] === nums[j]&& j-i <=k){
                return true;
            }
            j++;
        }
        i++;
        j=i+1;
    }
    return false;
};

//test
console.log(containsNearbyDuplicate([1,2,3,1], 3));
console.log(containsNearbyDuplicate([1,0,1,1], 1));
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2));