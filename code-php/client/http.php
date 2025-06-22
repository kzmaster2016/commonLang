<?php
require '../../vendor_php/autoload.php';

use GuzzleHttp\Client;

$client = new Client();

$response = $client->request('GET','http://192.168.4.195', [
    'json' => [
        'title' => 'foo',
        'body' => 'bar',
        'userId' => 1
    ]
]);

echo $response->getStatusCode(); // 201
echo $response->getBody();
