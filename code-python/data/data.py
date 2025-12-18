

# 变量：定义
nul = None

t = True
f = False

i1 = 1
i2 = -1
i3 = 0
f1 = 0.1
f2 = 0.0
f3 = -0.1

s1 = "12sdf"
s2 = 'world'
s3 = '''This is
a multi-line
string.'''
s4 = """
This is
another multi-line
string.
"""

tuple1 = (1, 2, 3)  # tuple1 = 1,2,3 不用小括号也可以，当时不建议这样写
list1 = [1, 2, 3]
set1 = {1, 2, 3}
map1 = {'a': 1, 'b': 2, 'c': 3} #字典和集合都是大括号{}来定义，要么都是值【集合】,要么都是键值【字典】，混写会报错


# 类型和值
print(nul, i1, i2, i3, f1, f2, f3, s1, s2, s3, s4, tuple1,  list1, set1, map1)
print(type(nul), type(i1), type(i2), type(i3), type(f1), type(f2), type(f3), type(s1), type(s2), type(s3), type(s4), type(tuple1), type(list1), type(set1), type(map1))

# 常量 Python
# 并不直接支持常量。但是，通过约定，常量通常用全大写字母表示。
# 这些常量在程序中一般不被修改，虽然可以修改，但应避免这样做。
PI = 3.14159
MAX_USERS = 1000

print(PI, MAX_USERS)



# print(string.ascii_letters)


# 类型判断
"""
整数 int	type(x) is int 或 isinstance(x, int)	isinstance(10, int) -> True
浮点数 float	type(x) is float 或 isinstance(x, float)	isinstance(10.5, float) -> True
字符串 str	type(x) is str 或 isinstance(x, str)	isinstance("hello", str) -> True
列表 list	type(x) is list 或 isinstance(x, list)	isinstance([1, 2, 3], list) -> True
元组 tuple	type(x) is tuple 或 isinstance(x, tuple)	isinstance((1, 2, 3), tuple) -> True
字典 dict	type(x) is dict 或 isinstance(x, dict)	isinstance({"key": "value"}, dict) -> True
集合 set	type(x) is set 或 isinstance(x, set)	isinstance({1, 2, 3}, set) -> True
布尔值 bool	type(x) is bool 或 isinstance(x, bool)	isinstance(True, bool) -> True
None 类型	x is None	x = None; x is None -> True
自定义类实例	isinstance(obj, ClassName)	class A: pass; a = A(); isinstance(a, A) -> True
"""

# 类型转换
"""
int(x)	将 x 转换为整数	int(3.14) -> 3
float(x)	将 x 转换为浮点数	float(10) -> 10.0
str(x)	将 x 转换为字符串	str(123) -> '123'
list(x)	将 x 转换为列表	list((1, 2, 3)) -> [1, 2, 3]
tuple(x)	将 x 转换为元组	tuple([1, 2, 3]) -> (1, 2, 3)
set(x)	将 x 转换为集合	set([1, 2, 2]) -> {1, 2}
dict(x)	将 x 转换为字典（需为键值对的可迭代对象）	dict([("a", 1), ("b", 2)]) -> {'a': 1, 'b': 2}
bool(x)	将 x 转换为布尔值	bool(0) -> False, bool(1) -> True
bytes(x, encoding)	将字符串 x 转换为字节序列	bytes('hello', 'utf-8') -> b'hello'
"""

# 类型格式化或序列化
import string
