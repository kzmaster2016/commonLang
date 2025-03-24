<?php

// 将整数打包成二进制字符串
$binaryData = pack("N", 123456789);
echo bin2hex($binaryData) . "\n"; // 输出: 075bcd15

// 从二进制字符串解包为整数
$unpackedData = unpack("N", $binaryData);
print_r($unpackedData); // 输出: Array ( [1] => 123456789 )


//  二进制数据与十六进制之间转换
$binary = "\x01\x02\x03\x04";
$hex = bin2hex($binary); // 转换为十六进制
echo $hex . "\n"; // 输出: 01020304

$binaryAgain = hex2bin($hex); // 转换回二进制
echo $binaryAgain === $binary ? "Match" : "Mismatch"; // 输出: Match



// 位操作
$a = 0b1100; // 二进制 1100
$b = 0b1010; // 二进制 1010

// 按位与
var_dump($a & $b); // 输出: 1000
// 按位或
var_dump($a | $b); // 输出: 1110
// 按位异或
var_dump($a ^ $b); // 输出: 0110
// 左移两位
var_dump($a << 2); // 输出: 110000
// 右移两位
var_dump($a >> 2); // 输出: 0011