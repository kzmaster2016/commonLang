package algorithm

import "fmt"

// 动态规划：01背包问题
/**
01背包之所以不能简单，通过计算单位质量下的价值，倒序选择，主要原因在于：
1. 背包的质量限制下，各个物品的质量不能都被质量限制整除，导致背包不能被尽可能多的填充，质量利用率可能不是最高

之所以01背包问题可以通过动态规划思想解决，主要原因在于：
1. 类似数学归纳法的思想：既有穷举法的完整性思想，又包含了存储优化和边界优化的思想
2. 穷举的思想，保证了不依赖于物品装入的顺序
3. 存储和边界的剪枝，降低了空间复杂度
4. 01背包和完全背包问题其实计算和存储了很多和限定结果看上去不那么相关的中间结果；这是思维最跳跃的地方;甚至使用了二维数组或滑动数组来保存结果

数学归纳法的核心：
1. 基本思想还是穷举法
2. 结果状态存储+状态转移
*/

/*
计算机的计算能力，本质是依赖于数据结构和程序结构：
1. 数据结构的功能在于数据的逻辑结构和存储
2. 程序结构本质只有两种：顺序执行，条件判断（规则），循环重复（迭代），数据结构（状态）
3. 01背包的其实计算机在算法执行的过程中，还会计算和存储，与结果可能不直接相关的大量中间结果，用于辅助规则判断
*/

func Pack1() {
	
	fmt.Println("01背包问题")

	//arr:=[][]int{[]int{1,2},[]int{3,4},[]int{5,6}}

	weightArray:=[]int{4,5,6,2,2}
	valueArray:=[]int{6,4,5,3,6}

	// weightArray:=[]int{1,2,3,4}
	// valueArray:=[]int{2,4,6,9}

	// weightArray:=[]int{5,4,3,2}
	// valueArray:=[]int{10,7,5,1}

	W:=10
	dp := make([]int, W+1)

	//先放第一个物品
	for i := 0; i < len(weightArray); i++ {
		for w := weightArray[i]; w <= W; w++ {
            dp[w] = max(dp[w], dp[w-weightArray[i]]+valueArray[i])
			fmt.Println(i,w,dp[w])
        }
		// for w := W; w >= weightArray[i]; w-- {
        //     dp[w] = max(dp[w], dp[w-weightArray[i]]+valueArray[i])
		// 	fmt.Println(i,w,dp[w])
        // }
	}

	fmt.Println(dp[W])


}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}