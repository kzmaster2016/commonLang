package reflect_test

import (
	"fmt"
	"reflect"
	"testing"
)
// 类型判断
func checkType(v interface{}) {
	t := reflect.TypeOf(v)
	k := t.Kind() // 获取具体类型种类

	fmt.Printf("变量值: %v，类型: %v，Kind: %v\n", v, t, k)

	switch k {
	case reflect.Bool:
		fmt.Println("这是一个 bool")
	case reflect.Int, reflect.Int8, reflect.Int16, reflect.Int32, reflect.Int64:
		fmt.Println("这是一个整数类型")
	case reflect.Uint, reflect.Uint8, reflect.Uint16, reflect.Uint32, reflect.Uint64, reflect.Uintptr:
		fmt.Println("这是一个无符号整数类型")
	case reflect.Float32, reflect.Float64:
		fmt.Println("这是一个浮点数类型")
	case reflect.Complex64, reflect.Complex128:
		fmt.Println("这是一个复数类型")
	case reflect.String:
		fmt.Println("这是一个字符串类型")
	case reflect.Array:
		fmt.Println("这是一个数组")
	case reflect.Slice:
		fmt.Println("这是一个切片")
	case reflect.Map:
		fmt.Println("这是一个映射 map")
	case reflect.Struct:
		fmt.Println("这是一个结构体 struct")
	case reflect.Ptr:
		fmt.Println("这是一个指针类型")
	case reflect.Interface:
		fmt.Println("这是一个接口类型")
	case reflect.Func:
		fmt.Println("这是一个函数")
	case reflect.Chan:
		fmt.Println("这是一个 channel")
	case reflect.UnsafePointer:
		fmt.Println("这是一个 unsafe 指针")
	default:
		fmt.Println("未知类型")
	}
	fmt.Println()
}

func TestCheckType(t *testing.T) {
	checkType(true)
	checkType(42)
	checkType(uint8(255))
	checkType(3.14)
	checkType("hello")
	checkType([]int{1, 2, 3})
	checkType([2]string{"a", "b"})
	checkType(map[string]int{"a": 1})
	checkType(struct{ Name string }{Name: "Tom"})
	checkType(&[]string{"x", "y"})
	checkType(make(chan int))
	checkType(func() {})
	//checkType(interface{}(nil))
}