<?php

// 封包函数
function packData($data) {
    $packed = '';

    // 打包整数（包括负整数）
    $packed .= pack('l', $data['int']);

    // 打包浮动数
    $packed .= pack('f', $data['float']);

    // 打包双精度浮动数
    $packed .= pack('d', $data['double']);

    // 打包布尔值
    $packed .= pack('C', $data['bool'] ? 1 : 0);

    // 打包字符串
    $packed .= pack('l', strlen($data['string'])) . $data['string'];

    return $packed;
}

// 解包函数
function unpackData($binaryData) {
    $data = [];
    $offset = 0;

    // 解包整数（包括负整数）
    $data['int'] = unpack('l', substr($binaryData, $offset, 4))[1];
    $offset += 4;

    // 解包浮动数
    $data['float'] = unpack('f', substr($binaryData, $offset, 4))[1];
    $offset += 4;

    // 解包双精度浮动数
    $data['double'] = unpack('d', substr($binaryData, $offset, 8))[1];
    $offset += 8;

    // 解包布尔值
    $data['bool'] = unpack('C', substr($binaryData, $offset, 1))[1] === 1;
    $offset += 1;

    // 解包字符串
    $strLen = unpack('l', substr($binaryData, $offset, 4))[1];
    $offset += 4;
    $data['string'] = substr($binaryData, $offset, $strLen);

    return $data;
}

// 示例数据
$data = [
    'int' => -12345,
    'float' => 3.14,
    'double' => 3.141592653589793,
    'bool' => true,
    'string' => 'Hello, Binary World!'
];

// 封包数据
$binaryData = packData($data);

// 输出封包后的二进制数据
echo bin2hex($binaryData) . PHP_EOL;

// 解包数据
$unpackedData = unpackData($binaryData);

// 输出解包后的数据
print_r($unpackedData);

?>
