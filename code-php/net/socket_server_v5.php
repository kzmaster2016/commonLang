<?php
declare(ticks=1);

$host = "0.0.0.0";
$port = 8080;
$maxClients = 10; // 最大并发连接数
$heartbeatInterval = 10; // 心跳间隔（秒）
$timeout = 30; // 连接超时时间（秒）

// 监听 SIGCHLD 防止僵尸进程
pcntl_signal(SIGCHLD, function() {
    while (pcntl_waitpid(-1, $status, WNOHANG) > 0);
});

// 创建服务器 socket
$server = stream_socket_server("tcp://$host:$port", $errno, $errstr);
if (!$server) {
    die("Server failed: $errstr ($errno)\n");
}
stream_set_blocking($server, false);

echo "Server started on $host:$port\n";

while (true) {
    $client = @stream_socket_accept($server, -1);
    if ($client) {
        $pid = pcntl_fork();
        if ($pid == -1) {
            die("Fork failed!\n");
        } elseif ($pid == 0) {
            fclose($server);
            handleClient($client);
            exit(0);
        } else {
            fclose($client);
        }
    }
}

/**
 * 处理客户端请求
 */
function handleClient($client) {
    stream_set_timeout($client, 30);
    echo "New client connected\n";
    
    $buffer = "";
    $lastHeartbeat = time(); // 记录心跳时间
    
    while (true) {
        $data = fread($client, 1024);
        if ($data === false || $data === "") {
            echo "Client disconnected\n";
            break;
        }
        if($data!="") {
            $buffer .= $data;

            // 处理粘包
            while ($packet = decodeTLV($buffer)) {
                list($type, $value) = $packet;
                echo "Received: Type=$type, Value=$value\n";
    
                // 处理业务逻辑
                if ($type == 1) {
                    fwrite($client, encodeTLV(2, strtoupper($value))); // 业务响应
                }
            }
        }

        // 服务器主动发送心跳包
        if (time() - $lastHeartbeat >= 10) {
            fwrite($client, encodeTLV(0, "heartbeat"));
            $lastHeartbeat = time();
        }

        // 检测超时
        $info = stream_get_meta_data($client);
        if ($info["timed_out"]) {
            echo "Client timeout, disconnecting...\n";
            break;
        }
    }

    fclose($client);
}

/**
 * TLV 编码
 */
function encodeTLV($type, $value) {
    return chr($type) . pack('n', strlen($value)) . $value;
}

/**
 * TLV 解码，支持粘包处理
 */
function decodeTLV(&$buffer) {
    if (strlen($buffer) < 3) return false;
    $type = ord($buffer[0]);
    $length = unpack('n', substr($buffer, 1, 2))[1];
    if (strlen($buffer) < (3 + $length)) return false;
    $value = substr($buffer, 3, $length);
    $buffer = substr($buffer, 3 + $length);
    return [$type, $value];
}
