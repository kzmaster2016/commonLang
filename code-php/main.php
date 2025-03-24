<?php

require_once '../vendor_php/autoload.php';

echo "hello world\n";


kzmaster\firstLogger\Logger::log("hello world");
kzmaster\localLogger\Logger::log("hello world");

var_dump(date('Y-m-d H:i:s', 1742545117));
var_dump(strtotime('2025-03-23 00:00:00'));