<?php

// require_once '../vendor_php/autoload.php';

// kzmaster\firstLogger\Logger::log("hello world");
// kzmaster\localLogger\Logger::log("hello world");

// var_dump((new DateTimeImmutable())->format('u'));

// var_dump(file_get_contents('D:\work\docs\肇庆\docs\account_info.txt'));


// var_dump(date('h:i'));
//var_dump(json_decode('{"code":1008,"message":"\u91cd\u653e\u653b\u51fb","data":[]}',true));
var_dump(preg_match('/(ab)+/', 'abab'));

// var_dump(array_merge([1, 2], [1,3, 4])); // [1, 2, 3, 4]
// var_dump([1, 2] + [1,3, 4]); // [1, 2, 4]
// var_dump(array_replace([1, 2], [1,3, 4])); // [1, 3, 4]

// var_dump(explode('/', '1/b/c', 2));
// var_dump(pathinfo('/a/b/c.txt', PATHINFO_BASENAME));
// var_dump(array_slice([1], -1));

var_dump(json_decode('{"code":500,"message":"\u8bf7\u6c42\u53c2\u6570\u7f3a\u5931: c_id \u6216 sy \u4e0d\u80fd\u4e3a\u7a7a\u3002","data":[]}', true));

function parseAddress2($text) {
    $result = [
        '分局' => null,
        '派出所' => null,
        '警务区' => null,
        '警格' => null,
    ];

    // 匹配所有带关键词的部分
    preg_match_all('/([^分派警]+?(?:分局|派出所|警务区|警格))/', $text, $matches);

    if (!empty($matches[1])) {
        foreach ($matches[1] as $m) {
            if (str_ends_with($m, '分局')) {
                $result['分局'] = $m;
            } elseif (str_ends_with($m, '派出所')) {
                $result['派出所'] = $m;
            } elseif (str_ends_with($m, '警务区')) {
                $result['警务区'] = $m;
            } elseif (str_ends_with($m, '警格')) {
                $result['警格'] = $m;
            }
        }
    }

    return $result;
}

function parseAddress(string $text): array {
    // 四个关键词（结果键）
    $keys = ['分局', '派出所', '警务区', '警格'];
    $result = array_fill_keys($keys, null);

    // 非贪婪匹配：捕获“内容 + 关键词”
    // 使用 u 修饰符以支持 UTF-8
    preg_match_all('/(.+?)(分局|派出所|警务区|警格)/u', $text, $matches, PREG_SET_ORDER);

    foreach ($matches as $m) {
        var_dump($m);
        // $m[1] = 关键词前的内容（名称），$m[2] = 关键词
        $name = trim($m[1]) . $m[2]; // 比如 "锦江" + "分局" => "锦江分局"
        $result[$m[2]] = $name;
    }

    return $result;
}


// 示例测试
// $text = "牛市口派出所锦江分局三号警格东光警务区";
// print_r(parseAddress($text));

$testCases = [
    "牛市口派出所锦江分局三号警格东光警务区",
    '城东分局幸福路派出所阳光警务区1号警格',
    '和平派出所城西分局和谐警务区2号警格',
    '3号警格城北分局新华派出所平安警务区',
    '高新警务区科技分局创新派出所5号警格',
    '缺失关键词的情况（仅作测试，实际按需求处理）' // 未包含的关键词会返回空
];

foreach ($testCases as $case) {
    print_r(parseAddress($case));
}