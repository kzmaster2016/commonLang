
const o1 = { a: 1, b: 2, c: 3 };

console.log(o1);


for ($i = 0; $i < 5; $i++) {
    for ($j = 0; $j < 5; $j++) {
        if ($i == 2 && $j == 3) {
            break;
        }
        console.log("第 "+$i+"-"+$j+" 次循环");
    }
}

$count = 0;
// for ($j = 0, $k = 1; $count < 3 && $k < 4; $j++, $k++) {
//     console.log("while 循环: "+$count+" <br>");
//     $count++;
// }

do{
    console.log("while 循环: "+$count+" <br>");
    $count++;
}while ($count < 3 ) 