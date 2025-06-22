package sys_cli

import (
	"flag"
	"fmt"
	"os"
	"strconv"
	//"testing"
)

func TestCli() {
	

	//t.Log("TestCli")

	// 解析命令行参数
	operation := flag.String("op", "", "operation: add or subtract")
	num1 := flag.Int("num1", 0, "first number")
	num2 := flag.Int("num2", 0, "second number")
	flag.Parse()

	if *operation == "" || *num1 == 0 || *num2 == 0 {
		fmt.Println("Usage: calc -op [add|subtract] -num1 [number] -num2 [number]")
		os.Exit(1)
	}

	switch *operation {
	case "add":
		fmt.Printf("%d + %d = %d\n", *num1, *num2, *num1+*num2)
	case "subtract":
		fmt.Printf("%d - %d = %d\n", *num1, *num2, *num1-*num2)
	default:
		fmt.Println("Invalid operation")
		os.Exit(1)
	}
}

func RunCliByArgs() {
	
	fmt.Println(os.Args)

	// 解析命令行参数
	operation := os.Args[2]
	num1,_ := strconv.Atoi(os.Args[4])
	num2,_ := strconv.Atoi(os.Args[6])
	

	if operation == "" || num1 == 0 || num2 == 0 {
		fmt.Println("Usage: calc -op [add|subtract] -num1 [number] -num2 [number]")
		os.Exit(1)
	}

	switch operation {
	case "add":
		fmt.Printf("%d + %d = %d\n", num1, num2, num1+num2)
	case "subtract":
		fmt.Printf("%d - %d = %d\n", num1, num2, num1-num2)
	default:
		fmt.Println("Invalid operation")
		os.Exit(1)
	}
}

// go run main.go -op add -num1 10 -num2 5
