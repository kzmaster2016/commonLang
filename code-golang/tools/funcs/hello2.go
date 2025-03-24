package funcs

import (
	"fmt"
	"go/scanner"
	"go/token"
)
func init() {	
	fmt.Println("funcs init")
}

type d1 struct {
  FieldName string `json:"fieldName"`
}

var source = `package main
 
import "fmt"
 
func main() {
    fmt.Println("Hello, World!")
}`

func aas() {
    // 初始化扫描器，这里使用的是源代码字符串
    fs := token.NewFileSet()
    var s scanner.Scanner
    s.Init(fs.AddFile("", fs.Base(), len(source)), []byte(source), nil, scanner.ScanComments)
 
    // 循环直到扫描结束
    for {
        pos, tok, lit := s.Scan()
        if tok == token.EOF {
            break
        }
        fmt.Printf("%s\t%s\t%q\n", fs.Position(pos), tok, lit)
    }
}
 
