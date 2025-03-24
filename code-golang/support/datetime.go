package support

import (
	"fmt"
	"time"
)

func init() {
	fmt.Println("datetime init")
}

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

    fmt.Println(time.Now().Unix())
 
}

func GetTime() time.Time {

    return time.Now()
}
