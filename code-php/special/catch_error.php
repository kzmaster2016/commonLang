<?php
error_reporting(0);//不报错，
error_reporting(0);//所有错
ini_set('error_reporting', 0);

set_error_handler(function ($level, $message, $file = '', $line = 0, $context = []) {
    var_dump([
        'level' => $level,
        'message' => $message,
        'file' => $file,
        'line' => $line,
        //'context' => $context,
    ]);
    if (error_reporting() & $level) {
        throw new ErrorException($message, 0, $level, $file, $line);
    }
});

set_exception_handler(function (Throwable $e) {
    var_dump('exception:' . $e->getMessage());
});

register_shutdown_function(function () {
    var_dump('shutdown:' . json_encode(error_get_last()));
});

// if (! $app->environment('testing')) {
//     ini_set('display_errors', 'Off');
// }

trigger_error('trigger_error', E_USER_WARNING);

// ini_set('error_reporting', 0);//关闭错误报告
// error_reporting(0)关闭错误报告
// error_reporting(E_ALL)	报告目前 PHP 所有定义的错误
// error_reporting(-1)	报告 所有可能的错误，包括未来版本新增的错误（更保险）


/**
 * php.ini 中的错误处理相关配置项
error_reporting	整数	控制报告哪些级别的错误（如 E_ALL）
display_errors	布尔	是否将错误输出到屏幕（默认 Off）
display_startup_errors	布尔	是否显示启动期间（PHP 初始化阶段）的错误
log_errors	布尔	是否将错误记录到日志文件中
error_log	字符串	指定错误日志文件路径
track_errors	布尔	启用后最后一个错误将保存到变量 $php_errormsg

 * fpm的配置文件中错误处理相关配置项
catch_workers_output	yes	捕获 FPM worker 的标准输出/错误输出，推荐开启
php_admin_value[display_errors]	Off	强制关闭错误显示，仅能通过 php_admin_value 设置
php_value[error_log]	/var/log/fpm-php.www.log	指定错误日志路径

 * 运行时 配置项
// 设置错误报告级别
error_reporting(E_ALL);
// 显示错误（调试时用）
ini_set('display_errors', '1');
// 记录错误到日志
ini_set('log_errors', '1');
ini_set('error_log', '/var/log/php_errors.log');

 * 开发与生产建议
开发环境	
display_errors = On
log_errors = On
error_reporting = E_ALL
生产环境	
display_errors = Off
log_errors = On
error_reporting = E_ALL & ~E_NOTICE & ~E_DEPRECATED


调用 error_reporting(0) 时，set_error_handler() 依然可以捕捉到错误，
因为 set_error_handler() 会捕获 PHP 错误并传递给指定的错误处理函数，即使你将错误报告级别设置为 0（即不显示错误）。

*如果你设置了 error_reporting(E_ALL)，但仍然看不到错误信息，请确认：
ini_set('display_errors', '1') 已设置；
php.ini 中未被 display_errors = Off 覆盖；
没有 @ 运算符抑制错误；
错误被记录到了日志而非直接输出（查看 error_log 设置项）。
 */
