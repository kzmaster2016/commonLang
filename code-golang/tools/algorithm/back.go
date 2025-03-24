package algorithm

import (
	"fmt"
)

//回溯算法：
/*-----------------------------------------全排列数组*/ 
func RunBack(){
	nums := []int{1, 2, 3}
	result := Permute(nums)

	fmt.Println("All permutations:")
	for _, perm := range result {
		fmt.Println(perm)
	}
}
func Permute(nums []int) [][]int {
	var result [][]int
	var path []int
	used := make([]bool, len(nums))

	backtrack(nums, &result, path, used)
	fmt.Println(result)
	return result
}

// Backtrack helper function
func backtrack(nums []int, result *[][]int, path []int, used []bool) {
	if len(path) == len(nums) {
		// Found a complete permutation
		temp := make([]int, len(path))
		copy(temp, path)
		*result = append(*result, temp)
		return
	}

	for i := 0; i < len(nums); i++ {
		// Skip used numbers
		if used[i] {
			continue
		}

		// Choose the current number
		path = append(path, nums[i])
		used[i] = true

		// Recurse
		fmt.Println(0,path,used)
		backtrack(nums, result, path, used)

		// Backtrack
		fmt.Println(1,path)
		path = path[:len(path)-1]
		used[i] = false
		fmt.Println(2,path,used)
	}
}



/*-----------------------------------------回溯法求子集*/ 
func RunBack2(){
	nums := []int{1, 2, 3}
    result := subsets(nums)
    fmt.Println(result)
}

func subsets(nums []int) [][]int {
    var result [][]int // 存储所有子集
    var path []int     // 存储当前路径（子集）

    // 定义回溯函数
    var backtrack func(start int)
    backtrack = func(start int) {
        // 将当前路径加入结果集
        temp := make([]int, len(path)) // 深拷贝 path
        copy(temp, path)
        result = append(result, temp)


		//fmt.Println(start, path)

        // 从当前索引开始，尝试每个可能的选择
        for i := start; i < len(nums); i++ {
            // 做选择
            path = append(path, nums[i])

			fmt.Println("前", i, path)
            // 递归探索下一层，最核心的规则的i+1，i在不同的上下文中都会递增
            backtrack(i + 1)
            // 撤销选择
            path = path[:len(path)-1]
			fmt.Println("后",i, path)
        }
    }

    // 从索引 0 开始递归
    backtrack(0)
    return result
}

/*-----------------------------------------电话号码的字母组合*/

func RunBack3(){
    digits := "23"
    result := letterCombinations(digits)
    fmt.Println(result)
}

func letterCombinations(digits string) []string{
	result:=[]string{}
	digitsMap:=map[string]string{
		"2":"abc",
        "3":"def",
        "4":"ghi",
        "5":"jkl",
        "6":"mno",
        "7":"pqrs",
        "8":"tuv",
        "9":"wxyz",
	}
	item:=""
	var fn func(i int)

	fn = func (i int)   {
		if len(item)== len(digits){
			result=append(result, item)
			return
		}

		b:= string(digits[i])
		for j:=0;j<len(digitsMap[b]);j++  {
			
			//digitsMap[b][j]
			item+=string(digitsMap[b][j])
			fn(i+1)
			item=item[:len(item)-1]
		}

		 
	}
	fn(0)


	return result
}


