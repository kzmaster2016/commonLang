<?php

// 可变参
function sum(...$numbers)
{
    return array_sum($numbers);
}

// 调用函数
var_dump(sum(1, 2, 3, 4)); // 输出: 10

// 参数值类型,返回值类型,命名传参需要php8+才支持
function divide(?float $a=10, float $b = 5): float
{
    if ($b == 0) {
        return 0; // 防止除以零错误
    }
    return $a / $b;
}

// 调用函数
var_dump(['funcs1',divide()]); // 输出: 5

