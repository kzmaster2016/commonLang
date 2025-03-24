package questions

import "fmt"

func merge(nums1 *[]int, m int, nums2 []int, n int) {
	// 从后向前合并
	res := []int{}
	i := 0
	j := 0

	// 当 nums2 尚未合并完时，继续合并
	for m > i && n > j {
		fmt.Println(i, j)
		if (*nums1)[i] < nums2[j] {
			res = append(res, (*nums1)[i])
			i++
		} else {
			res = append(res, nums2[j])
			j++
		}
	}
	fmt.Println(i, j)
	if i == m {
		res = append(res, nums2[j:]...)
	} else {
		res = append(res, (*nums1)[i-1:]...)
	}

	fmt.Println(res)
	*nums1 = append(*nums1, nums2...) //扩展nums1的长度，
	copy(*nums1, res)                 //修改切片元素
	//return res
}

func RunMerge1() {
	nums1 := []int{1, 2, 3}
	m := 3
	nums2 := []int{2, 5, 6}
	n := 3

	merge(&nums1, m, nums2, n)

	fmt.Println("Merged array:", nums1)
}
