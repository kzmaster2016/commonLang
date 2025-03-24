<?php

$xmlData = <<<XML
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
XML;

// 加载XML字符串
$xml = simplexml_load_string($xmlData);

// 获取根节点名称
echo "根节点名称: " . $xml->getName() . "\n";

// 读取公司名称
echo "公司名称: " . $xml->name .  $xml->name->getName()."\n";

// 读取多级子节点（员工列表）
foreach ($xml->employees->employee as $employee) {
    echo $employee->getName(). "员工: " . $employee->name . ", 年龄: " . $employee->age . "\n";
}

// 生成
var_dump($xml->asXML());