package main

import (
	"demo/code-golang/functions"
	"demo/code-golang/tools/algorithm"
	"demo/code-golang/tools/questions"
	// "demo/code-golang/cli"
	"fmt"
	"regexp"
	"strings"
)

func main() {
	fmt.Println("main")
	//funcs.ReadBuf()
	//text_tpl.ParseToken()
	//text_tpl.ExampleTemplate()
	//algorithm.LengthOfLongestSubstring("abcdabcaba")
	//algorithm.Pack1()
	algorithm.RunBack3()
	questions.RunMerge1()

	fmt.Println((functions.Greet(1, "algorithm")))

	s := "你好，世界"
	sub := string([]rune(s)[:2]) // 截取前两个字符
	fmt.Println(sub)             // 你好

	runes := []rune{'H', 'e', 'l', 'l', 'o'}
	str := string(runes)
	fmt.Println(str) // 输出 "Hello"

	strs := []string{"Hello", "World", "Go1"}
	result := strings.Join(strs, "-") // 使用空格作为分隔符
	fmt.Println(result)               // 输出 "Hello World Go"

	fmt.Println(regexp.MustCompile("H").ReplaceAllString(result,"sss"))
	fmt.Println(regexp.MustCompile("-").Split(result,5))

	fmt.Println(len([]rune("Hello匡正")))

	// cli.RunCliByArgs()
}
