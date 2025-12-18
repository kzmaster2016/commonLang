package file_tests

import (
	"fmt"
	"os"
	"testing"
)


func TestFile(t *testing.T) {
	dir, err := os.Getwd()
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	
	filepath := dir+"/exampleDir/example.txt"
	// 检查文件是否存在
	fileInfo, err := os.Stat(filepath)
	if os.IsNotExist(err) {
		fmt.Println("文件不存在")
	}else{
		fmt.Println("文件信息:", fileInfo.Sys())
		fmt.Println("文件信息:", fileInfo.Name())
		fmt.Println("文件信息:", fileInfo.Size())
		fmt.Println("文件信息:", fileInfo.Mode())

	}
	// 创建并写入文件
	file, err := os.Create(filepath)
	if err != nil {
		fmt.Println("创建文件失败:", err)
		return
	}
	
	file.WriteString("Hello, Go!")
	file.Close() // 确保文件关闭

	// 读取文件
	file, err = os.Open(filepath)
	if err != nil {
		fmt.Println("打开文件失败:", err)
		return
	}
	
	data := make([]byte, 100)
	n, _ := file.Read(data)
	fmt.Printf("读取文件内容: %s\n", string(data[:n]))
	file.Close()

	// 删除文件
	// err = os.Remove(filepath)
	// if err != nil {
	// 	fmt.Println("删除文件失败:", err)
	// } else {
	// 	fmt.Println("文件删除成功")
	// }
	 
}
