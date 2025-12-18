
//合并两个有序数组
//给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
function merge(nums1, nums2) {
    let l1 = nums1.length - 1;
    let l2 = nums2.length - 1;
    let k = nums1.length + nums2.length - 1;


    for (; l1 >= 0 && l2 >= 0;) {
        if (nums1[l1] > nums2[l2]) {
            nums1[k] = nums1[l1];
            l1--;
        } else {
            nums1[k] = nums2[l2];
            l2--;
        }
        k--;

        console.log('in', nums1, l1, l2, k);
    }

    while (l2 >= 0) {
        nums1[k] = nums2[l2];
        l2--;
        k--;
        console.log('out', nums1, l1, l2, k);
    }

}

//非递减顺序排列的两个数组  
const nums1 = [2, 5, 6];
const nums2 = [1, 2, 3];

merge(nums1, nums2);
console.log(nums1); // [1,2,2,3,5,6]