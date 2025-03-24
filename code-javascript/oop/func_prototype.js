// 定义构造函数
function Person(name, age) {
    // 公有实例属性
    this.name = name;

    

    // 公有方法:定义在构造函数内是为了访问私有属性
    this.introduce = function() {
        console.log(`Hi, my name is ${this.name} and I am ${_age} years old.`);
    };

    // 私有实例属性 (使用闭包)
    let _age = age;
    // 私有方法
    function getAge() {
        return _age;
    }

    // 通过公有方法访问私有方法
    this.getPrivateAge = function() {
        return getAge();
    };
}

// **静态属性**
Person.species = "Homo sapiens";

// **静态方法**
Person.getSpecies = function() {
    return Person.species;
};

// **向原型添加公有方法**
Person.prototype.sayHello = function() {
    console.log(`Hello, I'm ${this.name}`);
};

Person.prototype.introduce2 = function() {
    console.log(`--原型公有方法--Hi, my name is ${this.name} and I am ${this.getPrivateAge()} years old.`);

    //  私有属性无法访问 ${_age} 
    // console.log(`--原型公有方法--Hi, my name is ${this.name} and I am ${_age} years old.`);
};

// **实例化对象**
const p1 = new Person("Alice", 3000);
console.log(p1.name);  // ✅ Alice（公有属性）
p1.introduce();        // ✅ Hi, my name is Alice and I am 30 years old.
p1.introduce2();   
console.log(p1.getPrivateAge());  // ✅ 30（访问私有属性）
p1.sayHello();         // ✅ Hello, I'm Alice

// **尝试访问私有属性**
// console.log(p1._age);  // ❌ undefined（无法直接访问私有属性）
// console.log(p1.getAge());  // ❌ 语法错误（无法直接调用私有方法）

// **访问静态属性**
console.log(Person.species);  // ✅ Homo sapiens
console.log(Person.getSpecies());  // ✅ Homo sapiens


// 子类构造函数
function Employee(newField, ...args) {
    // 继承 Person 构造函数
    Person.call(this, ...args);

    // 添加新的属性
    this.newField = newField;
}

// 继承 Person 的原型方法
Employee.prototype = Object.create(Person.prototype);

// 修正 constructor 指向
Employee.prototype.constructor = Employee;

// 添加子类的方法
Employee.prototype.work = function() {
    console.log(`${this.name} is working as a ${this.newField}.`);
};

// **实例化 Employee 对象**
const emp = new Employee("Software Engineer", "Bob", 28);
emp.introduce();  // ✅ Hi, my name is Bob and I am 28 years old.
emp.sayHello();   // ✅ Hello, I'm Bob (继承自 Person)
emp.work();       // ✅ Bob is working as a Software Engineer.
