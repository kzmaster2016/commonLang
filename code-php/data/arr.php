<?php

$words = <<<___
天地风雷 水火山泽 
天地 
___;

var_dump($words);

// 去掉空白字符
$words = preg_replace("/\s+/", '', $words);
var_dump($words);

// 转为数组
$wordsSArr = preg_split('//u', $words, -1, PREG_SPLIT_NO_EMPTY);
print_r([count($wordsSArr), $wordsSArr]);

// 找出重复字符或去重：

// $wordsSArr2 = array_filter(array_count_values($wordsSArr), function ($value, $index) {
//     return $value > 1;
// }, ARRAY_FILTER_USE_BOTH);

// $wordsSArr2 = array_filter($wordsSArr, function ($value, $index) use ($wordsSArr) {
//     //var_dump($index);
//     //var_dump(array_search($value, $wordsSArr));
//     return array_search($value, $wordsSArr) != $index;
// }, ARRAY_FILTER_USE_BOTH);

// 找出重复字符或去重：

$wordsSArr2 = array_reduce($wordsSArr, function ($carry, $item) {
    if (isset($carry['cache'][$item])) {
        $carry['cache'][$item]++;
        $carry['dup'][] = $item;
    } else {
        $carry['cache'][$item] = 1;
    }
    return $carry;
}, ['cache' => [], 'dup' => []])['dup'];
print_r($wordsSArr2);

// 去除重复字符
// $wordsSArr = array_unique($wordsSArr);
// print_r([count($wordsSArr)]);

// 去除重复字符2
$wordsSArr3 = array_flip(array_flip($wordsSArr));
print_r(($wordsSArr3));


var_dump(preg_split('/\d/', "asd-1fds2"));

var_dump(md5(md5("kz@123456")));

$arr2 = [1,3,'a'=>2,4,5];
print_r($arr2);
array_splice($arr2, 1,null,[10]);
print_r($arr2);