package reflect_test

import (
	"fmt"
	"reflect"
	"testing"
	"strings"
)

func parse(value reflect.Value, path string) {
	if !value.IsValid() {
		fmt.Printf("%s = <invalid>\n", path)
		return
	}

	switch value.Kind() {
	case reflect.Ptr:
		if value.IsNil() {
			fmt.Printf("%s = nil\n", path)
		} else {
			parse(value.Elem(), path)
		}
	case reflect.Struct:
		for i := 0; i < value.NumField(); i++ {
			field := value.Type().Field(i)
			fieldPath := fmt.Sprintf("%s.%s", path, field.Name)
			parse(value.Field(i), fieldPath)
		}
	case reflect.Map:
		for _, key := range value.MapKeys() {
			fieldPath := fmt.Sprintf("%s[%v](%s)", path, key.Interface(),key.Kind())
			parse(value.MapIndex(key), fieldPath)
		}
	case reflect.Slice, reflect.Array:
		for i := 0; i < value.Len(); i++ {
			fieldPath := fmt.Sprintf("%s[%d]", path, i)
			parse(value.Index(i), fieldPath)
		}
	default:
		fmt.Printf("%s = %v (%s)\n", path, value.Interface(), value.Kind())
	}
}

type ExtraInfo struct {
	Region string
	Score  float64
}

type Info struct {
	City  string
	Zip   *int
	Extra ExtraInfo
}

type User struct {
	Name *string
	Age  int
	Tags []string
	Info Info
	Meta map[string]string // 额外的map字段
}

func getUser() User {
	name := "张三"
	zip := 518000
	return User{
		Name: &name,
		Age:  30,
		Tags: []string{"程序员", "深圳"},
		Info: Info{
			City:  "深圳",
			Zip:   &zip,
			Extra: ExtraInfo{"南山", 9.5},
		},
		Meta : map[string]string{
			"key1": "value1",
			"key2": "value2",
		},
	}
}

func TestParse(t *testing.T) {

	user := getUser()
	fmt.Println("递归解析结构体：")
	parse(reflect.ValueOf(user), "User")
}


func generateStruct(value reflect.Value, structName string) string {
	var sb strings.Builder
	sb.WriteString(fmt.Sprintf("type %s struct {\n", structName))

	// 遍历结构体字段
	for i := 0; i < value.NumField(); i++ {
		field := value.Type().Field(i)
		fieldType := field.Type
		fieldName := field.Name

		// 根据字段类型递归生成结构体
		fieldTypeStr := getFieldTypeString(fieldType)

		// 如果字段是结构体指针，则生成指针类型
		if fieldType.Kind() == reflect.Ptr {
			fieldTypeStr = "*" + fieldTypeStr
		}

		sb.WriteString(fmt.Sprintf("\t%s %s `json:\"%s\"`\n", fieldName, fieldTypeStr, strings.ToLower(fieldName)))
	}

	sb.WriteString("}\n")
	return sb.String()
}

func getFieldTypeString(fieldType reflect.Type) string {
	switch fieldType.Kind() {
	case reflect.Ptr:
		return "*" + getFieldTypeString(fieldType.Elem())
	case reflect.Struct:
		return fieldType.Name()
	case reflect.Slice:
		return "[]" + getFieldTypeString(fieldType.Elem())
	default:
		return fieldType.Name()
	}
}

func TestGenerateStruct(t *testing.T) {
	// 模拟数据
	name := "John"
	zip := 12345
	user := User{
		Name: &name,
		Age:  25,
		Tags: []string{"developer", "golang"},
		Info: Info{
			City: "Shenzhen",
			Zip:  &zip,
			Extra: ExtraInfo{
				Region: "Nanshan",
				Score:  9.5,
			},
		},
		Meta : map[string]string{
			"key1": "value1",
			"key2": "value2",
		},
	}

	// 生成结构体
	structName := "User"
	structDef := generateStruct(reflect.ValueOf(user), structName)
	fmt.Println(structDef)
}