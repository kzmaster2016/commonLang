import xml.etree.ElementTree as ET

xml_data = """
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
</company>
"""

root = ET.fromstring(xml_data)

# 获取根节点名称
print("根节点名称:", root.tag)

# 读取公司名称
company_name = root.find("name").text
print("公司名称:", company_name)

# 读取多级子节点（员工列表）
for employee in root.find("employees").findall("employee"):
    name = employee.find("name").text
    age = employee.find("age").text
    print(f"员工: {name}, 年龄: {age}")
    

# 生成 XML 
xml_output = ET.tostring(root, encoding="utf-8").decode()
print(xml_output)