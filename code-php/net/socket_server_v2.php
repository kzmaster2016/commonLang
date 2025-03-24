<?php
$server = stream_socket_server("tcp://0.0.0.0:8080", $errno, $errstr);
if (!$server) {
    die("$errstr ($errno)");
}
echo "Server listening on port 8080...\n";

while ($conn = stream_socket_accept($server)) {
    $pid = pcntl_fork();
    if ($pid == -1) {
        die("Could not fork process\n");
    } elseif ($pid == 0) {
        fwrite($conn, "Hello from PHP Server\n");
        fclose($conn);
        exit(0);
    } else {
        pcntl_wait($status); // 等待子进程结束
    }
}
