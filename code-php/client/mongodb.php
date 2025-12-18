<?php
require '../../vendor_php/autoload.php';

$confg = json_decode(file_get_contents(__DIR__ . '/../../config/mongodb.json'), true);
$client = new MongoDB\Client(sprintf("mongodb://%s:%d", $confg['defaults']['host'], $confg['defaults']['port']));
$collection = $client->test->users;

$result = $collection->insertOne(['name' => 'Alice', 'age' => 25]);
echo "Inserted with Object ID '{$result->getInsertedId()}'";
