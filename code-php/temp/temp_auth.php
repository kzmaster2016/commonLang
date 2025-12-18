<?php
function imageToBase64(string $imagePath): ?string
{
    if (!file_exists($imagePath) || !is_file($imagePath)) {
        return null;
    }

    $imageData = file_get_contents($imagePath);
    if ($imageData === false) {
        return null;
    }

    $base64 = base64_encode($imageData);
    $mimeType = mime_content_type($imagePath); // 如 image/jpeg, image/png 等

    // 返回完整的 data URI 格式
    return "data:$mimeType;base64,$base64";
}

$imagePath = 'D:\work\temp\pics\_knowledge_07946ef0-6895-4af3-ac05-1ce95a55666c.png'; // 替换为实际图片路径
$base64Image = imageToBase64($imagePath);
//var_dump($base64Image);


function generate(array $params, string $secret): string
{
    // 排序
    ksort($params);

    // 拼接字符串：key1=value1&key2=value2...
    $query = http_build_query($params);

    // 拼接密钥
    $stringToSign = $query . '&key=' . $secret;

    // 计算签名（可换成 HMAC-SHA256）
    return md5($stringToSign);
}


function genNonce(): string
{
    // 生成随机数:14+4+12
    $nonce = date('YmdHis') . rand(1000, 9999) . bin2hex(random_bytes(6));

    return $nonce;
}
$time = time();
$nonce = genNonce();
$sign = generate([
    'appid' => 'secxun-rpa-001',
    'timestamp' => $time,
    'nonce' => $nonce,
    'unit_scope' => 'nyyh',
], 'secxun-xyz2026');
var_dump([$time, $nonce, $sign]);
