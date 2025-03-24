<?php
$server = stream_socket_server("tcp://0.0.0.0:8080", $errno, $errstr);
if (!$server) {
    die("$errstr ($errno)");
}
echo "Server listening on port 8080...\n";

while ($conn = stream_socket_accept($server)) {
    fwrite($conn, "Hello from PHP Server\n");
    fclose($conn);
}
