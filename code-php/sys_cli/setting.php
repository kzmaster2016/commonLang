<?php

$oldMask = umask(0);
var_dump(decoct($oldMask));
umask($oldMask);

$pid = pcntl_fork();

if($pid>0){
    // parent
    echo "parent\n";
    exit(0);

}elseif($pid==0){
    // child
    echo "child\n";
    $pid = pcntl_fork();
    if($pid>0){
        // parent
        echo "parent\n";
        exit(0);
    }elseif($pid==0){
        // child
        
    }else{
        echo "fork failed\n";
        exit(1);
    }
     
}else{
    echo "fork failed\n";
    exit(1);
}