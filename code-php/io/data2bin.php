<?php
// 整数转换为二进制
$int = 12345;
$binary = pack("N", $int); // "N" 代表 32 位无符号大端整数
var_dump(bin2hex($binary)); // 输出：00003039= 3*16^3+3*16+9

// 还原整数
$unpacked = unpack("N", $binary);
var_dump($unpacked); // 输出：12345

// 浮点数转换
$float = 12.34;
$binaryFloat = pack("f", $float);
$unpackedFloat = unpack("f", $binaryFloat);
echo $unpackedFloat[1] . "\n"; // 输出：12.34
?>
