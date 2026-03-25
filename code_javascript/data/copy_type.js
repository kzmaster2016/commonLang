// 变量拷贝方式 + 类型判断方式（JavaScript）

console.log('=== 1) 基本类型拷贝（值拷贝）===');
let a = 10;
let b = a;
b = 99;
console.log('a =', a, 'b =', b); // a 不受影响

console.log('\n=== 2) 引用类型拷贝（浅拷贝）===');
const obj1 = { name: 'Tom', info: { age: 18 } };
const obj2 = obj1; // 只是引用地址拷贝
obj2.info.age = 30;
console.log('obj1.info.age =', obj1.info.age); // 30

console.log('\n=== 3) 对象浅拷贝 ===');
const obj3 = { ...obj1 }; // 或 Object.assign({}, obj1)
obj3.info.age = 40;
console.log('obj1.info.age =', obj1.info.age); // 40（嵌套对象仍共享）

console.log('\n=== 4) 深拷贝 ===');
const deep1 = structuredClone(obj1);
deep1.info.age = 50;
console.log('obj1.info.age =', obj1.info.age); // 40
console.log('deep1.info.age =', deep1.info.age); // 50

console.log('\n=== 5) 类型判断 ===');
function getType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

console.log('typeof 123 ->', typeof 123); // number
console.log('typeof null ->', typeof null); // object（历史遗留）
console.log('Array.isArray([]) ->', Array.isArray([])); // true
console.log('{} instanceof Object ->', {} instanceof Object); // true
console.log('getType(null) ->', getType(null)); // Null
console.log('getType(new Date()) ->', getType(new Date())); // Date
