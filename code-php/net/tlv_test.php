<?php
// TLV 编码
function encodeTLV($tag, $value) {
    $length = strlen($value);
    return chr($tag) . chr($length) . $value;
}

// TLV 解码
function decodeTLV($data) {
    $tag = ord($data[0]);
    $length = ord($data[1]);
    $value = substr($data, 2, $length);
    return ["tag" => $tag, "length" => $length, "value" => $value];
}

// 测试编码
$encoded = encodeTLV(0x01, "Hello");
echo "Encoded TLV: " . bin2hex($encoded) . "\n";

// 测试解码
$decoded = decodeTLV($encoded);
echo "Decoded TLV: Tag={$decoded['tag']}, Length={$decoded['length']}, Value={$decoded['value']}\n";
?>
