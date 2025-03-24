<?php
$data = "Hello, Base64!匡正";

// 编码
$encoded = base64_encode($data);
echo "Encoded: " . $encoded . "\n";

// 解码
$decoded = base64_decode($encoded);
echo "Decoded: " . $decoded . "\n";