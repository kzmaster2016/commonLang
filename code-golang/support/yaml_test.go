package support

import (
	"fmt"
	"log"
	"gopkg.in/yaml.v2"
	"testing"
)

// 定义结构体
type Person struct {
	Name string `yaml:"name"`
	Age  int    `yaml:"age"`
	City string `yaml:"city"`
}

func TestYaml(t *testing.T) {	
	// 编码：将结构体转换为 YAML
	p := Person{
		Name: "John",
		Age:  30,
		City: "New York",
	}

	data, err := yaml.Marshal(&p)
	if err != nil {
		log.Fatalf("error: %v", err)
	}
	fmt.Println("YAML 编码输出:")
	fmt.Println(string(data))

	// 解码：将 YAML 转换为结构体
	var person Person
	err = yaml.Unmarshal(data, &person)
	if err != nil {
		log.Fatalf("error: %v", err)
	}
	fmt.Println("YAML 解码输出:")
	fmt.Println(person)
}