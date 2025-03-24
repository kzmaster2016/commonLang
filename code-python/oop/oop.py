# 2. 定义类和创建对象

# 定义一个类
class Person:
    # 初始化方法（构造函数）
    def __init__(self, name, age):
        self.name = name  # 实例属性
        self.age = age

    # 定义一个方法
    def greet(self):
        print(f"Hello, my name is {self.name}, and I am {self.age} years old.")

# 创建对象
p1 = Person("Alice", 25)
p2 = Person("Bob", 30)

# 调用方法
p1.greet()  # 输出：Hello, my name is Alice, and I am 25 years old.
p2.greet()  # 输出：Hello, my name is Bob, and I am 30 years old.


# 3. 类的成员
# 3.1 实例属性
# 通过 self 定义，属于具体对象。

class Dog:
    def __init__(self, name):
        self.name = name

dog = Dog("Buddy")
print(dog.name)  # 输出：Buddy

# 3.3 实例方法
# 通过 self 操作实例，属于对象。

class Car:
    def __init__(self, brand):
        self.brand = brand

    def drive(self):
        print(f"The {self.brand} car is driving.")

car = Car("Toyota")
car.drive()  # 输出：The Toyota car is driving.


# 3.2 类属性
# 通过类名定义，属于类本身，共享于所有对象。

class Animal:
    species = "Mammal"  # 类属性

a1 = Animal()
a2 = Animal()
print(a1.species)  # 输出：Mammal
print(a2.species)  # 输出：Mammal

print(Animal.species)  # 输出：Mammal

# 修改类属性
Animal.species = "Bird"
print(a1.species)  # 输出：Bird
print(a2.species)  # 输出：Bird


# 3.4 类方法
# 通过 @classmethod 定义，操作类本身。

class Calculator:
    @classmethod
    def add(cls, a, b):
        return a + b

print(Calculator.add(5, 3))  # 输出：8

# 3.5 静态方法
# 通过 @staticmethod 定义，不依赖类或实例。

class Utility:
    @staticmethod
    def square(x):
        return x * x

print(Utility.square(4))  # 输出：16


# 4. 继承
# 4.1 单继承

class Animal:
    def __init__(self, name):
        self.name = name

    def sound(self):
        print("Some generic sound")

class Dog(Animal):
    def sound(self):
        print("Woof!")

dog = Dog("Buddy")
dog.sound()  # 输出：Woof!


# 4.2 多继承

class A:
    def method_a(self):
        print("Method A")

class B:
    def method_b(self):
        print("Method B")

class C(A, B):
    pass

c = C()
c.method_a()  # 输出：Method A
c.method_b()  # 输出：Method B


# 5. 多态

class Bird:
    def sound(self):
        print("Chirp")

class Dog:
    def sound(self):
        print("Woof")

def make_sound(animal):
    animal.sound()

bird = Bird()
dog = Dog()

make_sound(bird)  # 输出：Chirp
make_sound(dog)   # 输出：Woof

# 6. 封装
# 6.1 公有属性
# 默认的属性和方法都是公有的，可以直接访问。

class Person:
    def __init__(self, name):
        self.name = name

p = Person("Alice")
print(p.name)  # 输出：Alice


# 6.2 私有属性
# 通过双下划线 __ 开头，属性或方法变为私有。

class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # 私有属性

    def get_balance(self):
        return self.__balance  # 提供接口访问私有属性

account = BankAccount(1000)
print(account.get_balance())  # 输出：1000
# print(account.__balance)  # 报错：AttributeError

# 7. 魔法方法
# 7.1 __str__ 方法
# 自定义对象的字符串表示。

class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return f"Point({self.x}, {self.y})"

p = Point(2, 3)
print(p)  # 输出：Point(2, 3)

# 7.2 运算符重载
# 通过重写魔法方法实现。

class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __str__(self):
        return f"Vector({self.x}, {self.y})"

v1 = Vector(1, 2)
v2 = Vector(3, 4)
print(v1 + v2)  # 输出：Vector(4, 6)