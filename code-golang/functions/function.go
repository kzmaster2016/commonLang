package functions

import (
	"fmt"
	"math"
)

func Test(a string, b ...int) {
	fmt.Println("aa")
	math.Abs(float64(12))
	go func() {

	}()
	defer func() {

	}()
	fmt.Println("bb")
	// Test2()
}

// golang 参数类型，返回值类型，不支持参数默认值
func Greet(age int, name ...string) (string, error) {
	if age != 0 {
		fmt.Println(age)
	} else {
		fmt.Println("no age")
	}

	if len(name) == 0 {
		return "Hello, Guest!", nil // 默认值
	}
	return "Hello, " + name[0] + "!", nil
}
