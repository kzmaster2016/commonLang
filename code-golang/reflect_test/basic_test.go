package reflect_test

import (
	"fmt"
	"reflect"
	"testing"
)

func ParseStructTags(conf interface{}) {
	t := reflect.TypeOf(conf)
	v := reflect.ValueOf(conf)
	for i := 0; i < t.NumField(); i++ {
		field := t.Field(i)
		value := v.Field(i)
		fmt.Printf("字段名: %s, Tag: %s, 值: %v\n",
			field.Name, field.Tag.Get("json"), value.Interface())
	}
}

func AssertEqual(a, b interface{}) {
	if !reflect.DeepEqual(a, b) {
		fmt.Println("不相等:", a, b)
	} else {
		fmt.Println("相等")
	}
}



func TestParseStructTags(t *testing.T) {
	type Config struct {
		Host string `json:"host"`
		Port int    `json:"port"`
	}
	conf := Config{Host: "localhost", Port: 8080}
	ParseStructTags(conf)
}






