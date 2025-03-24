package file_tests

import (
	"fmt"
	"os"
	"testing"
)

func TestDir(t *testing.T) {
	// 检查目录是否存在
	if _, err := os.Stat("exampleDir"); os.IsNotExist(err) {
		fmt.Println("目录不存在")
	} else {
		fmt.Println("目录存在")
	}

	// 创建目录
	err := os.Mkdir("exampleDir", 0755)
	if err != nil {
		fmt.Println("创建目录失败:", err)
	} else {
		fmt.Println("目录创建成功")
	}

	// 打开目录
	dir, err := os.Open("exampleDir")
	if err != nil {
		fmt.Println("打开目录失败:", err)
		return
	}
	defer dir.Close()

	// 遍历目录
	files, err := dir.Readdirnames(0) // 获取目录下所有文件和子目录的名字
	if err != nil {
		fmt.Println("读取目录失败:", err)
	} else {
		for _, file := range files {
			fmt.Println("目录内容:", file)
		}
	}

	// 删除目录
	// err = os.Remove("exampleDir")
	// if err != nil {
	// 	fmt.Println("删除目录失败:", err)
	// } else {
	// 	fmt.Println("目录删除成功")
	// }
}
