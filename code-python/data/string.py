
# string操作
s = "Python匡正"

s10 = r"C:\path\to\file"  # r修饰符表示原始字符串，斜杆不转义

# 拼接和长度
print(s10, s+s10, s*2, len(s), len(s.encode('utf-8')))   

# 格式化
print ("我叫 %s 今年 %d 岁!" % ('小明', 10))

# 遍历
for char in s:
    print(char)

for index, char in enumerate(s):
    print(f"索引: {index}, 字符: {char}")

# 字符串方法与判断
print("Py" in "Python")   # 输出 True
print("py" not in "Python")  # 输出 True

# 索引和切片：小标从0开始，负索引表示从右往左，切片前闭后开
print(s[0])  # 输出 'P'
print(s[-1])  # 输出 'n'（负索引表示从右往左）
print(s[0:3])  # 输出 'Pyt'（前闭后开）
print(s[:3])   # 输出 'Pyt'
print(s[2:])   # 输出 'thon'
print(s[::2])  # 输出 'Pto'（步长为2）
print(s[::-1])  # 输出 'nohtyP'（倒序）



# 其他操作可以查手册
print(s.startswith("Py"))  # 输出 True
print(s.endswith("on"))    # 输出 True

"""
1. 查找相关
方法	描述	示例
str.find(sub[, start[, end]])	查找子字符串，返回索引，找不到返回 -1	"hello".find("l") → 2
str.rfind(sub[, start[, end]])	从右侧查找子字符串，返回索引	"hello".rfind("l") → 3
str.index(sub[, start[, end]])	查找子字符串，返回索引，找不到抛异常	"hello".index("l") → 2
str.rindex(sub[, start[, end]])	从右侧查找子字符串，返回索引	"hello".rindex("l") → 3
str.count(sub[, start[, end]])	子字符串出现的次数	"hello".count("l") → 2
str.startswith(prefix[, start[, end]])	是否以指定前缀开头	"hello".startswith("he") → True
str.endswith(suffix[, start[, end]])	是否以指定后缀结尾	"hello".endswith("o") →


2. 字符大小写操作
方法	描述	示例
str.upper()	转为大写	"hello".upper() → "HELLO"
str.lower()	转为小写	"HELLO".lower() → "hello"
str.capitalize()	首字母大写	"hello".capitalize() → "Hello"
str.title()	每个单词首字母大写	"hello world".title() → "Hello World"
str.swapcase()	大小写互换	"Hello".swapcase() → "hELLO"


3. 格式调整
方法	描述	示例
str.strip([chars])	去掉两端的指定字符（默认空白）	" hello ".strip() → "hello"
str.lstrip([chars])	去掉左侧的指定字符	" hello".lstrip() → "hello"
str.rstrip([chars])	去掉右侧的指定字符	"hello ".rstrip() → "hello"
str.center(width[, fillchar])	居中对齐，填充字符默认为空格	"hello".center(10, "*") → "**hello***"
str.ljust(width[, fillchar])	左对齐，填充字符默认为空格	"hello".ljust(10, "*") → "hello*****"
str.rjust(width[, fillchar])	右对齐，填充字符默认为空格	"hello".rjust(10, "*") → "*****hello"
str.zfill(width)	左侧补零	"42".zfill(5) → "00042"


4. 分割与连接
方法	描述	示例
str.split(sep=None, maxsplit=-1)	分割字符串，返回列表	"a,b,c".split(",") → ["a", "b", "c"]
str.rsplit(sep=None, maxsplit=-1)	从右侧分割	"a,b,c".rsplit(",", 1) → ["a,b", "c"]
str.partition(sep)	分割为三部分（前，sep，后）	"a,b,c".partition(",") → ("a", ",", "b,c")
str.rpartition(sep)	从右侧分割为三部分	"a,b,c".rpartition(",") → ("a,b", ",", "c")
str.splitlines(keepends=False)	按行分割	"hello\nworld".splitlines() → ["hello", "world"]
str.join(iterable)	使用分隔符将可迭代对象连接成字符串	" ".join(["Hello", "World"]) → "Hello World"


5. 字符判断
方法	描述	示例
str.isalpha()	是否全是字母	"abc".isalpha() → True
str.isdigit()	是否全是数字	"123".isdigit() → True
str.isalnum()	是否全是字母或数字	"abc123".isalnum() → True
str.isspace()	是否全是空白字符	" ".isspace() → True
str.islower()	是否全是小写	"abc".islower() → True
str.isupper()	是否全是大写	"ABC".isupper() → True
str.istitle()	是否是标题格式	"Hello World".istitle() → True


6. 替换与对齐
方法	描述	示例
str.replace(old, new[, count])	替换指定内容，count 限定替换次数	"abab".replace("a", "z", 1) → "zbab"
str.expandtabs(tabsize=8)	替换字符串中的 \t 为空格	"A\tB".expandtabs(4) → "A B"


7. 编码和解码
方法	描述	示例
str.encode(encoding="utf-8", errors="strict")	编码为字节序列	"hello".encode("utf-8") → b'hello'
bytes.decode(encoding="utf-8", errors="strict")	字节序列解码为字符串	b'hello'.decode("utf-8") → "hello"


8. 格式化字符串
方法	描述	示例
str.format(*args, **kwargs)	字符串格式化	"Hello, {}".format("World") → "Hello, World"
str.format_map(mapping)	使用映射格式化	"{name}".format_map({"name": "Alice"}) → "Alice"
f"..."(f-string)	字符串格式化(Python 3.6+)	name = "Alice"; f"Hello, {name}" → "Hello, Alice"

"""



