<?php
require '../../vendor_php/autoload.php';

$client = new MongoDB\Client("mongodb://192.168.4.195:27017");
$collection = $client->test->users;

$result = $collection->insertOne(['name' => 'Alice', 'age' => 25]);
echo "Inserted with Object ID '{$result->getInsertedId()}'";
