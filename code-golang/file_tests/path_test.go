package file_tests

import (
	"fmt"
	"path"
	"testing"
    "os"
)

func TestPath(t *testing.T) {
    t.Log("TestPath")
    path1 := "./first/second/test123.txt"
    // 路径解析
    baseFile := path.Base(path1)
    ext:=path.Ext(path1)
    fmt.Println("文件名",baseFile) // test.txt
    fmt.Println("不含后缀",baseFile[0:len(baseFile)-len(ext)]) // test
    
    fmt.Println("文件后缀",ext) // .txt
    fmt.Println(path.IsAbs(path1)) // false
    fmt.Println(path.Dir(path1)) // ./first


    dir, err := os.Getwd()
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	fmt.Println("当前工作目录:", dir)

    execPath, err := os.Executable()
	if err != nil {
		fmt.Println("Error:", err)
		return
	}

	// 获取脚本所在目录
	dir2 := path.Dir(execPath)

	fmt.Println("脚本所在目录:", dir2, execPath)
    
}