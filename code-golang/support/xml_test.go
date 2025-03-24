package support

import (
	"encoding/xml"
	"fmt"
	"testing"
)

// 定义结构体
type Company struct {
	XMLName   xml.Name  `xml:"company"` // 获取根节点名称
	Name      string    `xml:"name"`
	Employees Employees `xml:"employees"`
}

type Employees struct {
	EmployeeList []Employee `xml:"employee"`
}

type Employee struct {
	Name string `xml:"name"`
	Age  int    `xml:"age"`
}

func TestXml(t *testing.T) {

	xmlData := `
	<company>
		<name>OpenAI</name>
		<employees>
			<employee>
				<name>张三</name>
				<age>30</age>
			</employee>
			<employee>
				<name>李四</name>
				<age>25</age>
			</employee>
		</employees>
	</company>`

	// 解析
	var company Company
	err := xml.Unmarshal([]byte(xmlData), &company)
	if err != nil {
		fmt.Println("解析错误:", err)
		return
	}

	fmt.Println("根节点名称:", company.XMLName.Local)
	fmt.Println("公司名称:", company.Name)

	for _, emp := range company.Employees.EmployeeList {
		fmt.Printf("员工: %s, 年龄: %d\n", emp.Name, emp.Age)
	}


	// 生成
	person := company

	xmlOutput, err := xml.MarshalIndent(person, "", "  ")
	if err != nil {
		fmt.Println("生成 XML 失败:", err)
		return
	}

	fmt.Println(string(xmlOutput))
}
