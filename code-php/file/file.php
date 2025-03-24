<?php
// 检查文件是否存在
if (file_exists("example.txt")) {
    echo "文件存在\n";
} else {
    echo "文件不存在\n";
}

// 创建并写入文件
$file = fopen("example.txt", "w");
if ($file) {
    fwrite($file, "Hello, PHP!");
    fclose($file);
    echo "文件已写入\n";
} else {
    echo "文件创建失败\n";
}

// 读取文件
$file = fopen("example.txt", "r");
if ($file) {
    $content = fread($file, filesize("example.txt"));
    fclose($file);
    echo "文件内容: $content\n";
} else {
    echo "无法打开文件\n";
}

// 删除文件
// if (unlink("example.txt")) {
//     echo "文件已删除\n";
// } else {
//     echo "删除文件失败\n";
// }
?>
