<?php

$filename = __DIR__ . '/exampleDir/example.txt'; // 使用 __DIR__ 获取当前文件的目录

var_dump(file_get_contents($filename)); // 读取文件内容并输出

var_dump(pathinfo($filename)); // 获取文件信息并输出

var_dump(realpath($filename)); // 获取文件的绝对路径并输出

var_dump(stat($filename)); // 检查文件是否存在并输出

var_dump(filetype($filename)); // 获取文件类型并输出

var_dump(fstat(fopen($filename, 'r'))); // 获取文件状态信息并输出

