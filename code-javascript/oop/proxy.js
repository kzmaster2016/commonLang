const target = { name: "张明", age: 25 };

const proxy = new Proxy(target, {
    get(obj, prop) {
        console.log(`正在访问属性: ${prop}`);
        return obj[prop] ?? "属性不存在";
    },
    set(target, prop, value) {
        if (prop === "age" && typeof value !== "number") {
            console.log("年龄必须是数字");
            // return false;
        }
        target[prop] = value;
        return true;
    },
    /**
     * set(),deleteProperty()方法应当返回一个布尔值。
        返回 true 代表属性设置成功。
        在严格模式下，如果 set() 方法返回 false，那么会抛出一个 TypeError 异常。
     */
    deleteProperty(target, prop) {
        console.log(`不能删除属性: ${prop}`);
        // return false;
        return true;
    },
    has(target, prop) {
        return prop !== "age"; // 隐藏 `age` 属性
    },//只对 in 操作有影响
});

console.log(proxy.name);  // 输出: 正在访问属性: name  \n 张明
console.log(proxy.age);   // 输出: 正在访问属性: age  \n 25

console.log(proxy.gender); // 属性不存在

proxy.age = 30;   // 修改成功
proxy.age = "abc"; // 年龄必须是数字

delete proxy.age;  // 不能删除属性: age
console.log('依然可以访问属性age：' + proxy.age);  // 25 (属性未被删除)

console.log("name" in proxy); // true
console.log("age" in proxy);  // false


// -----------------Proxy 代理函数----------------------
const add = function (a, b) { return a + b };

const proxyFunc = new Proxy(add, {
    apply(target, thisArg, args) {

        console.log(`调用函数: ${thisArg} , ${args.join(" + ")}`);//thisArg确实没什么用

        // return {}//target.apply(thisArg, args) 
        return target(...args);
    }
});

console.log(proxyFunc(5, 3)); // 调用函数: 5 + 3 \n 8


function Monster1(disposition) {
    this.disposition = disposition;
}

class Monster2 extends Monster1 {

}

const handler1 = {
    construct(target, args) {
        console.log(`Creating a ${target.name}`);
        // Expected output: "Creating a monster1"

        return new target(...args);
    },
};

const proxyClass = new Proxy(Monster1, handler1);
const proxyClass2 = new Proxy(Monster2, handler1);

console.log(new proxyClass("fierce").disposition);
console.log(new proxyClass2("fierce2").disposition);