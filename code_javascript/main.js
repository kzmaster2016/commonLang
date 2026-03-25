
const o1 = { a: 1, b: 2, c: 3 };

console.log(o1);

let $count = 0;

do{
    console.log("while 循环: "+$count+" <br>");
    $count++;
}while ($count < 3 ) 

console.log(Array.from({ length: 3 }));
    
    
//npm install 安装失败,修改镜像 
//npm install -g cnpm --registry=https://registry.npmmirror.com
// 使用cnpm安装依赖包

// set ELECTRON_MIRROR=https://npmmirror.com/mirrors/electron/

// npm config set registry https://registry.npmjs.org/
// npm audit
// npm config set registry https://registry.npmmirror.com