<?php
 


// 时区使用
$datetime = new DateTime('2025-02-18 18:23:28',$timezone);
 
var_dump($datetime);
var_dump((new DateTimeZone('utc'))->getOffset($datetime));
// var_dump((new DateTimeZone(date_default_timezone_get()))->getOffset(new DateTime()));

var_dump($datetime->setTimezone(new DateTimeZone('asia/shanghai'))->format('Y-m-d H:i:s'));
var_dump($datetime->getTimestamp());

var_dump(strtotime('2025-02-18 10:30:00'));

//指定时间和时区实例化
$t=new DateTime('2025-02-18 10:30:00', new DateTimeZone('utc'));
// $t->setTimestamp(1739845800); //时间戳与时区参数无关
var_dump($t
->setTimezone(new DateTimeZone('Asia/Shanghai'))
->format('Y-m-d H:i:s'));


// 获取所有可用时区
$timezones = timezone_identifiers_list();
// echo "所有可用时区：\n";
// foreach ($timezones as $timezone) {
//     echo $timezone . "\n";
// }

$timezone = date_default_timezone_get();
echo "当前时区: " . $timezone;

var_dump(date('Y-m-d H:i:s', time()));

// 设置时区为上海时间
// date_default_timezone_set('UTC');

echo "当前时区已设置为: " . date_default_timezone_get();

var_dump(date('Y-m-d H:i:s', time()));

var_dump(date('Y-m-d H:i:s', 1741254562));