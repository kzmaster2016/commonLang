<?php
// 循环
function generateNumbers($max) {
    for ($i = 1; $i <= $max; $i++) {
        yield $i;
    }
}

foreach (generateNumbers(5) as $num) {
    echo "$num\n";
}

// 嵌套
function subGenerator() {
    yield "A";
    yield "B";
}

function mainGenerator() {
    yield "Start";
    yield from subGenerator(); // 直接委托给子生成器
    yield "End";
}

foreach (mainGenerator() as $val) {
    echo "$val \n";
}

