import {Person2 as Person} from './oop/class.js'

const p1 = new Person("Alice", 30);
console.log(p1.name);  // ✅ Alice（公有属性）
p1.introduce();        // ✅ Hi, my name is Alice and I am 30 years old.
console.log(p1.getPrivateAge());  // ✅ 30（访问私有属性）


/**
nodejs的包管理有两种机制:commonjs和esm
commonjs是nodejs的包管理器，esm是浏览器的包管理器
如果是esm，使用import导入 export导出，如果是commonjs，使用require导入 exports导出


依赖包可以分为两种，一种是本地依赖，一种是npm包写在node_modules里面的

对于本地包
如果是commonjs，不用加.js后缀，
如果是esm，需要加.js

对于npm包
都不需要加.js

 */