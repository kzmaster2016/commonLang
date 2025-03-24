package data

import (
	"fmt"
)

// 数据类型
func Data() {

	fmt.Println("数据类型")
	// 基本数据类型
	var b bool = true                    // 布尔类型
	var i int = 42                       // 整型
	var i8 int8 = -128                   // 8 位整型
	var i16 int16 = -32768               // 16 位整型
	var i32 int32 = -2147483648          // 32 位整型
	var i64 int64 = -9223372036854775808 // 64 位整型

	var u uint = 42                       // 无符号整型
	var u8 uint8 = 255                    // 8 位无符号整型
	var u16 uint16 = 65535                // 16 位无符号整型
	var u32 uint32 = 4294967295           // 32 位无符号整型
	var u64 uint64 = 18446744073709551615 // 64 位无符号整型

	var f32 float32 = 3.14    // 32 位浮点型
	var f64 float64 = 2.71828 // 64 位浮点型

	var c64 complex64 = 1 + 2i   // 64 位复数
	var c128 complex128 = 2 + 3i // 128 位复数

	var s string = "Hello, Go!" // 字符串

	var ch byte = 'A' // 字节 (uint8 的别名)
	var r rune = '中'  // Unicode 字符 (int32 的别名)

	// 复合数据类型
	var arr [5]int = [5]int{1, 2, 3, 4, 5}                // 数组
	var slice []int = []int{1, 2, 3}                      // 切片
	var m map[string]int = map[string]int{"a": 1, "b": 2} // 映射
	var p *int = &i                                       // 指针
	var chn chan int = make(chan int)                     // 通道

	// 自定义结构体
	type Person struct {
		Name string
		Age  int
	}
	var person Person = Person{Name: "John", Age: 30}

	// 接口
	var iFace interface{} = "I am an interface"

	// 特殊值
	var emptySlice []int        // nil 切片
	var emptyMap map[string]int // nil 映射
	var emptyChan chan int      // nil 通道
	var ptr *int                // nil 指针

	// 输出
	fmt.Println("布尔值:", b)
	fmt.Println("整数:", i, i8, i16, i32, i64)
	fmt.Println("无符号整数:", u, u8, u16, u32, u64)
	fmt.Println("浮点数:", f32, f64)
	fmt.Println("复数:", c64, c128)
	fmt.Println("字符串:", s)
	fmt.Println("字节和字符:", ch, r)
	fmt.Println("数组:", arr)
	fmt.Println("切片:", slice)
	fmt.Println("映射:", m)
	fmt.Println("指针:", *p)
	fmt.Println("通道:", chn)
	fmt.Println("结构体:", person)
	fmt.Println("接口:", iFace)
	fmt.Println("特殊值:", emptySlice, emptyMap, emptyChan, ptr)
}

// 类型判断
func DataJudge( ) {

}