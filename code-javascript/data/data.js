// ------------------------------变量：定义-------------------
nul = null

t = true
f = false

i1 = 1
i2 = -1
i3 = 0
f1 = 0.1
f2 = 0.0
f3 = -0.1

s1 = "12sdf"
s2 = 'world'
s3 = `This is
a multi - line
string.`

// tuple1 = (1, 2, 3)  # js没有元组
list1 = [1, 2, 3]
//set1 = {1, 2, 3}
map1 = { 'a': 1, 'b': 2, 'c': 3 }


// # 类型和值
console.log(nul, i1, i2, i3, f1, f2, f3, s1, s2, s3, list1, map1)


// # 常量 Python
// # 并不直接支持常量。但是，通过约定，常量通常用全大写字母表示。
// # 这些常量在程序中一般不被修改，虽然可以修改，但应避免这样做。
PI = 3.14159
MAX_USERS = 1000

console.log(PI, MAX_USERS)


// 类型判断
/**
typeof	判断基本数据类型，无法区分 null 和对象。
instanceof	判断对象是否为某构造函数的实例。
Object.prototype.toString.call()	精确判断任何类型。
Array.isArray()	专门判断数组。
isNaN() / Number.isNaN()	判断是否为 NaN。
isFinite() / Number.isFinite()	判断是否为有限数值。
*/

// Object.prototype.toString.call()
/**
以下是一些常见数据类型通过 Object.prototype.toString.call() 的返回值：

数据类型	返回值(16种)
Undefined	[object Undefined]
Null	[object Null]
Number	[object Number]
String	[object String]
Boolean	[object Boolean]
Array	[object Array]
Object	[object Object]

Function	[object Function]
Date	[object Date]
RegExp	[object RegExp]
Map	[object Map]
Set	[object Set]
WeakMap	[object WeakMap]
WeakSet	[object WeakSet]
Symbol	[object Symbol]
BigInt	[object BigInt]
*/

// ------------------------判断数据类型-------------------
function getType(value) {
    return Object.prototype.toString.call(value).slice(8, -1);
}

// 示例
console.log(getType(123));         // Number
console.log(getType('Hello'));     // String
console.log(getType(true));        // Boolean
console.log(getType(null));        // Null
console.log(getType(undefined));   // Undefined
console.log(getType([]));          // Array
console.log(getType({}));          // Object
console.log(getType(() => { }));    // Function
console.log(getType(new Date()));  // Date
console.log(getType(/regex/));     // RegExp
console.log(getType(new Map()));   // Map
console.log(getType(new Set()));   // Set
console.log(getType(Symbol(12)));    // Symbol
console.log(getType(12n));    // BigInt   或者BigInt(12);  

// ------------------------类型转换-------------------

// 类型转换 string
console.log(String(123));        // "123"
console.log(String(true));       // "true"
console.log((123).toString());   // "123"
console.log([1, 2, 3].toString(), String([1, 2, 3]));// "1,2,3"
console.log(null + "", String(null));          // "null"
console.log(undefined + "");     // "undefined"

// 类型转换 number
console.log(Number("123"));      // 123
console.log(Number(true));       // 1
console.log(Number(false));      // 0
console.log(Number("123abc"));   // NaN (无法完全转换为数字)
console.log(parseInt("123abc")); // 123
console.log(parseFloat("3.14")); // 3.14
console.log(Number(null));       // 0
console.log(Number(undefined));  // NaN

// 类型转换 bool
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false
console.log(Boolean(123));       // true
console.log(Boolean("hello"));   // true
console.log(Boolean([]));        // true
console.log(Boolean({}));        // true

/**
undefined	"undefined"	NaN	false
null	"null"	0	false
true	"true"	1	true
false	"false"	0	false
"" (空字符串)	""	0	false
"123"	"123"	123	true
"abc"	"abc"	NaN	true
0	"0"	0	false
1	"1"	1	true
[] (空数组)	""	0	true
[1,2]	"1,2"	NaN	true
{} (空对象)	"[object Object]"	NaN	true
*/

// -----------------对象关系（与构造函数）判断--------------

console.log([] instanceof Array); // true

// 对象拷贝