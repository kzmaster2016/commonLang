package main

import (
	"fmt"
	"time"
)

// func main() {
// 	// 定义一个切片

// 	Run()
// }

func Run() {
	zone, offset := time.Now().Zone()
	fmt.Println("Current timezone offset:", zone, offset)

	now := time.Now()
	fmt.Println("Current time:", now)

	loc, err := time.LoadLocation("UTC")
	if err != nil {
		fmt.Println("Error loading UTC:", err)
		return
	}
	utcTime := time.Now().In(loc)
	fmt.Println("Current time in UTC:", utcTime)

	zone, offset = utcTime.Zone()
	fmt.Println("Current timezone offset:", zone, offset)

    fmt.Println(time.Now().In(loc).Format("2006-01-02 15:04:05"))
}