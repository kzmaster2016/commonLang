<?php
// 获取系统信息
echo "OS: " . php_uname() . "\n";
echo "Architecture: " . php_uname('m') . "\n";

// 获取 CPU 负载
// $load = sys_getloadavg();
// echo "CPU Load: " . $load[0] . "%\n";

// 获取内存信息（适用于 Linux）
if (PHP_OS_FAMILY == 'Linux') {
    $meminfo = file_get_contents("/proc/meminfo");
    preg_match("/MemTotal:\s+(\d+)/", $meminfo, $matches);
    echo "Total Memory: " . ($matches[1] / 1024) . " MB\n";
}

// 获取磁盘信息
echo "Disk Free: " . round(disk_free_space("/") / 1024 / 1024 / 1024, 2) . " GB\n";
echo "Disk Total: " . round(disk_total_space("/") / 1024 / 1024 / 1024, 2) . " GB\n";


echo "PATH: " . getenv("PATH") . "\n";
print_r($_ENV);

$output = shell_exec("dir"); // Linux: ls -l, Windows: dir

var_dump($output);
