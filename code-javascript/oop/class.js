class Person {
    // 静态公有属性
    static species = "Homo sapiens";

    // 静态私有属性 (ES2020+)
    static #planet = "Earth";

    // 公有实例属性
    name;

    // 私有实例属性 (ES2020+)
    #age;

    constructor(name, age) {
        this.name = name;  // 赋值公有属性
        this.#age = age;   // 赋值私有属性
    }

    // 公有实例方法
    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.#age} years old.`);
    }

    // 私有实例方法
    #getAge() {
        return this.#age;
    }

    // 通过公有方法访问私有方法
    getPrivateAge() {
        return this.#getAge();
    }

    // 静态公有方法
    static getSpecies() {
        return this.species;
    }

    // 静态私有方法
    static #getPlanet() {
        return this.#planet;
    }

    // 通过公有静态方法访问私有静态方法
    static getPrivatePlanet() {
        return this.#getPlanet();
    }
}

// **实例化对象**
const p1 = new Person("Alice", 30);
console.log(p1.name);  // ✅ Alice（公有属性）
p1.introduce();        // ✅ Hi, my name is Alice and I am 30 years old.
console.log(p1.getPrivateAge());  // ✅ 30（访问私有属性）

// **尝试访问私有属性**
// console.log(p1.#age);  // ❌ 语法错误（无法直接访问私有属性）
// console.log(p1.#getAge());  // ❌ 语法错误（无法直接调用私有方法）

// **访问静态属性**
console.log(Person.species);  // ✅ Homo sapiens
console.log(Person.getSpecies());  // ✅ Homo sapiens

// **尝试访问私有静态属性**
// console.log(Person.#planet);  // ❌ 语法错误（无法直接访问私有静态属性）
// console.log(Person.#getPlanet());  // ❌ 语法错误（无法直接调用私有静态方法）

// **通过公有静态方法访问私有静态属性**
console.log(Person.getPrivatePlanet());  // ✅ Earth


// 继承
class Employee extends Person {
    constructor(jobTitle, ...args) {
        super(...args);
        this.jobTitle = jobTitle;
    }

    introduce() {
        super.introduce();  // 调用父类方法
        console.log(`I work as a ${this.jobTitle}.`);
    }
}

const emp = new Employee("Software Engineer","Bob", 30);
emp.introduce();