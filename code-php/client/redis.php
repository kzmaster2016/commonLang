<?php

//基于redis扩展
$redis = new \Redis();
$redis->connect('192.168.4.195', 6379);

// 写入
$redis->set('namephp', 'Alic2e');

// 读取
echo $redis->get('namephp');

// 删除
// $redis->del('name');
