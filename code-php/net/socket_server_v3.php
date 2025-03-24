<?php
$server = stream_socket_server("tcp://0.0.0.0:8080", $errno, $errstr);
if (!$server) {
    die("$errstr ($errno)");
}
echo "Server listening on port 8080...\n";

// 心跳和超时支持
while ($conn = stream_socket_accept($server)) {
    stream_set_timeout($conn, 30); // 设置超时 30s
    fwrite($conn, "PING\n"); // 发送心跳包
    $data = fread($conn, 1024);
    
    if ($data === false || feof($conn)) {
        echo "Client disconnected\n";
        fclose($conn);
        continue;
    }
    
    echo "Received: " . trim($data) . "\n";
    fclose($conn);
}
