<?php
function encodeTLV($type, $value) {
    return chr($type) . pack('n', strlen($value)) . $value;
}

function decodeTLV(&$buffer) {
    if (strlen($buffer) < 3) return false;
    $type = ord($buffer[0]);
    $length = unpack('n', substr($buffer, 1, 2))[1];
    if (strlen($buffer) < (3 + $length)) return false;
    $value = substr($buffer, 3, $length);
    $buffer = substr($buffer, 3 + $length);
    return [$type, $value];
}

$socket = stream_socket_client("tcp://127.0.0.1:8080", $errno, $errstr);
if (!$socket) die("$errstr ($errno)");

stream_set_timeout($socket, 30);

// 发送 TLV 数据
$data = ["Hello", "World", "TLV Protocol"];
foreach ($data as $msg) {
    fwrite($socket, encodeTLV(1, $msg));
    sleep(1);
}

// 监听服务器响应
$buffer = "";
while (!feof($socket)) {
    $buffer .= fread($socket, 1024);
    while ($packet = decodeTLV($buffer)) {
        list($type, $value) = $packet;
        echo "Received: Type=$type, Value=$value\n";
    }
}

// 发送心跳包
while (true) {
    fwrite($socket, encodeTLV(0, "heartbeat"));
    sleep(5);
}
?>
