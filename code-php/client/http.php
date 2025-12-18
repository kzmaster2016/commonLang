<?php
require '../../vendor_php/autoload.php';

use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Request;

$client = new Client();

// $response = $client->request('GET','http://192.168.4.195', [
//     'json' => [
//         'title' => 'foo',
//         'body' => 'bar',
//         'userId' => 1
//     ]
// ]);

// echo $response->getStatusCode(); // 201
// echo $response->getBody();


$headers = [
  'Content-Type' => 'application/json'
];
$body = '{
  "base64": "'. base64_encode(file_get_contents('C:\Work\dev_project\commonLang\ocr3.jpg')) .'",
  "options": {
    "ocr.language": "models/config_chinese.txt",
    "ocr.cls": true,
    "ocr.limit_side_len": 4320,
    "tbpu.parser": "multi_none",
    "data.format": "text"
  }
}';



$request = new Request('POST', '192.168.200.151:1224/api/ocr', $headers, $body);
$res = $client->sendAsync($request)->wait();
$data = json_decode($res->getBody(),true);

var_dump($data);

