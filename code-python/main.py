globalVar = "I am global"  # 全局作用域

def testFunction():
    localVar = "I am local"  # 局部作用域
    print(localVar)  # 输出：I am local
    print(globalVar)  # 输出：I am global
    
    def innerFunction():
        enclosingVar = "I am enclosing"  # 外层作用域
        print(enclosingVar)  # 输出：I am enclosing
    
    innerFunction()
    for i in range(3):
        print(i)

testFunction()
 
# import struction.first_level as first
# print(first.name)
# first.print_var()

import struction.first_level

# 必须使用全路径调用
print(struction.first_level.name)
struction.first_level.print_var()


# 或者使用别名
from  struction.sub_module import second_level
print(second_level.name)
second_level.print_var()


# 如果想减少引用模块的层级，通过 import 包名（文件夹名）引入和通过 包名.模块.var（文件夹名.文件名）使用，
# 必须在包的__init__.py文件中添加 包含模块的引用：from . import first_level

from struction.sub_module import third_module 
print(third_module.third_level.name)
third_module.third_level.print_var()



# oop目录并不是一个包，但不影响子目录成为一个包
from oop.package1 import module1
print(module1.ai)

def 匡正():
    print("This is a function in the main module.")
    
    列表 = [1, 2, 3]
    print("This is a list in the main module:", 列表)