class Person:

    def __init__(self, name, age=20):
        self.name = name #实例属性
        self.__age = age #实例私有属性

    def drive(self): #实例方法
        print(f"The {self.__age} car is driving.")

    def __sing(self): #实例私有方法
        print(f"The {self.属性} car is driving.")

    species = "Mammal"  # 类属性 :类和所有实例共享一份

    @classmethod #类方法，依赖类
    def add(cls, a, b):
        return a + b

    @staticmethod #类方法，不依赖类
    def square(x):
        return x * x


class SpecialPerson:
    species = "Mammal"  # 类属性 :类和所有实例共享一份

    def __init__(self, name):
        self.name = name #实例属性

    def drive(self): #实例方法
        print(f"The {self.属性} car is driving.")

    @classmethod #类方法，依赖类
    def add(cls, a, b):
        return a + b

    @staticmethod #类方法，不依赖类
    def square(x):
        return x * x


# 继承
class SuperPerson(Person):
    pass

#实例化
obj = Person("kz")
obj.drive()

# #多继承
class A:
    def do(self):
        print("A is doing")

class B:
    def do(self):
        print("B is doing")

class C(A,B):
    pass

#多态
def howDo(who):
    who.do()


howDo(A())
howDo(B())

# 静态字段的访问

class MyClass:
    static_var = "Hello, Static Variable!"  # 静态属性（类变量）

    def instance_method(self):
        print("实例方法访问：", MyClass.static_var)  # 通过类名访问
        print("实例方法访问：", self.static_var)  # 通过实例访问
        MyClass.static_method()  # 通过类名调用静态方法
        self.static_method()  # 通过实例调用静态方法（Python 允许）
    

    @classmethod
    def class_method(cls):
        print("类方法访问：", cls.static_var, MyClass.static_var)  # 通过 cls 访问

    @staticmethod
    def static_method():
        print("静态方法访问：", MyClass.static_var)  # 只能通过类名访问（无法使用 `self` 或 `cls`）

# 测试
obj = MyClass()
obj.instance_method()
MyClass.class_method()
MyClass.static_method()
