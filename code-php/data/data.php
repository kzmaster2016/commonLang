<?php
# 变量
# 变量：定义
$nul = Null;

$t = true;
$f = false;

$i1 = 1;
$i2 = -1;
$i3 = 0;
$f1 = 0.1;
$f2 = 0.0;
$f3 = -0.1;

$s1 = "12sdf";
$s2 = 'world';
$s3 = <<<___
This is;
a multi-line
string.
___;


//$tuple1 = (1, 2, 3);   
$list1 = [1, 2, 3];
//$set1 = {1, 2, 3};
$map1 = [
    'a' => 1,
    'b' => 2,
    'c' => 3
];


# 常量 Python
# 并不直接支持常量。但是，通过约定，常量通常用全大写字母表示。
# 这些常量在程序中一般不被修改，虽然可以修改，但应避免这样做。
const PI = 3.14159;
const MAX_USERS = 1000;

print_r([PI, MAX_USERS]);

# 类型和值
//echo "$nul, $t, $f, $i1, $i2, $i3, $f1, $f2, $f3, $s1, $s2, $s3,  $list1, $map1\n";

var_dump([$nul, $t, $f, $i1, $i2, $i3, $f1, $f2, $f3, $s1, $s2, $s3,  $list1, $map1]);
var_dump([
    gettype($nul),
    gettype($t),
    gettype($f),
    gettype($i1),
    gettype($i2),
    gettype($i3),
    gettype($f1),
    gettype($f2),
    gettype($f3),
    gettype($s1),
    gettype($s2),
    gettype($s3),
    gettype($list1),
    gettype($map1)
]);
/**
 * gettype返回值
"boolean"：布尔值
"integer"：整数
"double"：浮点数（在PHP中没有单独的float类型，double表示浮点数）
"string"：字符串
"array"：数组
"object"：对象
"NULL"：空值
"resource"：资源类型
 */

# is系列
var_dump([is_null($nul), is_int($i1), is_float($f1), is_string($s1), is_array($list1), is_array($map1)]);
/**
 * 
is_bool($var)：是否为布尔值
is_int($var) 或 is_integer($var)：是否为整数
is_float($var) 或 is_double($var)：是否为浮点数
is_string($var)：是否为字符串
is_array($var)：是否为数组
is_object($var)：是否为对象
is_null($var)：是否为NULL
is_resource($var)：是否为资源
is_callable($var)：是否为可调用的函数或方法
is_iterable($var)：是否为可迭代的类型（PHP 7.1+）
is_numeric($var)：是否为数值或数值字符串
 */

# 判空系列
//empty($nul);empty($i3);empty($f2);empty($s2);empty($list1);empty($map1);
//isset($nul);isset($i3);isset($f2);isset($s2);isset($list1);isset($map1);


// 类型转换
/**
 * 显式类型转换通过在变量前加上目标类型来实现。
常见类型关键字
(int) 或 (integer)：转换为整数
(bool) 或 (boolean)：转换为布尔值
(float) 或 (double) 或 (real)：转换为浮点数
(string)：转换为字符串
(array)：转换为数组
(object)：转换为对象
(unset)：转换为 NULL
 */

var_dump((unset)$f1);

// 格式化或序列化
