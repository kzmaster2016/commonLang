<?php

namespace a\b\c;

var_dump($list = glob('D:\work\docs\出差报销\发票\肇庆-待报销\*.pdf'));

$sum = 0;
foreach ($list as $file) {

    if (pathinfo($file, PATHINFO_EXTENSION) == 'pdf' 
    // && strpos(pathinfo($file, PATHINFO_FILENAME), '高铁') !== false  13059383011 15119826268
    ) {
        $filenameArr = explode('_', pathinfo($file, PATHINFO_FILENAME));

        var_dump(array_slice($filenameArr, -1)[0]);
        $sum += array_slice($filenameArr, -1)[0];
    }
}

var_dump($sum);


exit;

//AX202508281213448538625907 18575734585


$str = '4464';

var_dump((string)substr($str, 6, 3));

var_dump(sprintf("%.7f,%.7f", 0.05523345324, 0.05523344324));

class c1
{


    public  function f1()
    {
        var_dump([
            __METHOD__,
            __CLASS__,
            __NAMESPACE__,
            __DIR__,
            __FILE__,
            get_class($this),
            get_class_methods($this),
            get_class_vars(get_class($this)),
            get_object_vars($this),
            get_class($this) == __CLASS__
        ]);
    }
}

(new c1())->f1();
