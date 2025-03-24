<?php
// 获取命令行参数
$options = getopt("o:n1:n2:");
var_dump($options);

var_dump($argv);

$options['o'] = $argv[2];
$options['n1'] = $argv[4];
$options['n2'] = $argv[6];

if (!isset($options['o']) || !isset($options['n1']) || !isset($options['n2'])) {
    echo "Usage: php calc.php -o [add|subtract] -n1 [num1] -n2 [num2]\n";
    exit(1);
}

$operation = $options['o'];
$num1 = $options['n1'];
$num2 = $options['n2'];

switch ($operation) {
    case 'add':
        echo "$num1 + $num2 = " . ($num1 + $num2) . "\n";
        break;
    case 'subtract':
        echo "$num1 - $num2 = " . ($num1 - $num2) . "\n";
        break;
    default:
        echo "Invalid operation\n";
        exit(1);
}

// php calc.php -o add -n1 10 -n2 5
