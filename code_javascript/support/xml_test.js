import xml2js from 'xml2js';

const xmlData = `
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
</company>`;
 
xml2js.parseString(xmlData, (err, result) => {
    if (err) {
        console.error("解析错误:", err);
        return;
    }

    // 获取根节点名称（xml2js 默认转换为对象，所以这里手动获取）
    console.log("根节点名称:", Object.keys(result)[0]);

    // 读取公司名称
    console.log("公司名称:", result.company.name[0]);

    // 读取多级子节点（员工列表）
    result.company.employees[0].employee.forEach(emp => {
        console.log(`员工: ${emp.name[0]}, 年龄: ${emp.age[0]}`);
    });

    //生成
    const builder = new xml2js.Builder();
    const xmlOutput = builder.buildObject(result);
    console.log(xmlOutput);
});


