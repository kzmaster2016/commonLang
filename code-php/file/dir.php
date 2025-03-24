<?php
// 检查目录是否存在
if (is_dir("exampleDir")) {
    echo "目录存在\n";
} else {
    echo "目录不存在\n";
}

// 创建目录
if (mkdir("exampleDir", 0755)) {
    echo "目录创建成功\n";
} else {
    echo "创建目录失败\n";
}

// 打开目录
$dir = opendir("exampleDir");
if ($dir) {
    // 遍历目录
    echo "目录内容:\n";
    while (($file = readdir($dir)) !== false) {
        echo $file . "\n";
    }
    closedir($dir);
} else {
    echo "无法打开目录\n";
}

// 删除目录
// if (rmdir("exampleDir")) {
//     echo "目录删除成功\n";
// } else {
//     echo "删除目录失败\n";
// }
?>
