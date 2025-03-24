package file_tests

import (
	"fmt"
	"os"
	"testing"
)

func TestFile(t *testing.T) {
	// 检查文件是否存在
	_, err := os.Stat("example.txt")
	if os.IsNotExist(err) {
		fmt.Println("文件不存在")
	}

	// 创建并写入文件
	file, err := os.Create("example.txt")
	if err != nil {
		fmt.Println("创建文件失败:", err)
		return
	}
	defer file.Close() // 确保文件关闭
	file.WriteString("Hello, Go!")

	// 读取文件
	file, err = os.Open("example.txt")
	if err != nil {
		fmt.Println("打开文件失败:", err)
		return
	}
	defer file.Close()
	data := make([]byte, 100)
	n, _ := file.Read(data)
	fmt.Printf("读取文件内容: %s\n", string(data[:n]))

	// 删除文件
	err = os.Remove("example.txt")
	if err != nil {
		fmt.Println("删除文件失败:", err)
	} else {
		fmt.Println("文件删除成功")
	}
}
