<?php
require_once '../../vendor_php/autoload.php';

use Symfony\Component\Yaml\Yaml;

// 编码：将数据转换为 YAML 格式
$data = [
    'name' => 'John',
    'age' => 300,
    'city' => 'New York'
];

$yaml = Yaml::dump($data);
echo "YAML 编码输出:\n";
echo $yaml;

// 解码：将 YAML 格式的字符串解析为数组
$parsedData = Yaml::parse($yaml);
echo "YAML 解码输出:\n";
print_r($parsedData);