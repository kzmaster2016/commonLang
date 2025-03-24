# ----------------------元组----------------
my_tuple = (10, 20, 30, 40, 20)

# 下标玩法
print(my_tuple[0])  # 输出 'P'
print(my_tuple[-1])  # 输出  （负索引表示从右往左）
print(my_tuple[0:3])  # 输出  （前闭后开）
print(my_tuple[:3])   # 输出
print(my_tuple[2:])   # 输出
print(my_tuple[::2])  # 输出  （步长为2）
print(my_tuple[::-1])  # 输出  （倒序）
print(my_tuple[:])  # 输出 全部

print(my_tuple.index(20))
print(my_tuple.count(20))
print(len(my_tuple))

# 遍历元组
for item in my_tuple:
    print(item)

for index in range(len(my_tuple)):
    print(f"Index {index}: {my_tuple[index]}")

for key, item in enumerate(my_tuple):
    print(key, item)

# // 元组查找
print(my_tuple.index(20))  # 输出 1

# // 含可变元素
my_tuple = (1, [2, 3], 4)
my_tuple[1][0] = 99
print(my_tuple)  # 输出 (1, [99, 3], 4)


# --------------------------list前面和元组一样，不同部分为-----------------------
my_list = [10, 20, 30, 40]

# 下标玩法
# print(my_list[0])  # 输出 'P'
# print(my_list[-1])  # 输出  （负索引表示从右往左）
# print(my_list[0:3])  # 输出  （前闭后开）
# print(my_list[:3])   # 输出
# print(my_list[2:])   # 输出
# print(my_list[::2])  # 输出  （步长为2）
# print(my_list[::-1])  # 输出  （倒序）
# print(my_list[:])  # 输出 全部

# # 遍历元组
# for item in my_list:
#     print(item)

# for index in range(len(my_list)):
#     print(f"Index {index}: {my_list[index]}")

# for key, item in enumerate(my_list):
#     print(key, item)

# # // 元组查找
# print(my_list.index(20))  # 输出 1

# # // 含可变元素
# my_list = (1, [2, 3], 4)
# my_list[1][0] = 99
# print(my_list)  # 输出 (1, [99, 3], 4)

# 插入
my_list.append(100)
my_list.extend([200, 300, 200])
my_list.insert(1, 99)
print(my_list)

# 删除
my_list.remove(99)
my_list.pop(3)
del my_list[0]
print(my_list)

# 修改
my_list[0] = -1
my_list[1:3] = [9, 8]
print(my_list)

# 排序
print(sorted(my_list, reverse=True))  # 不改变原列表，返回新列表
my_list.sort(reverse=True)  # 改变原列表

print(my_list)

# -----------------------------------------map----------------------------------
my_map = {
    "a": 1,
    "b": 2,
    "c": 3,
    1: "a",
    2: "b",
    3: "c"
}

# 遍历

print('\n'+'--------------------------------')
for i in my_map.keys():
    print(i)

print('\n'+'--------------------------------')
for i in my_map:  # 默认就是遍历key
    print(i)

print('\n'+'--------------------------------')
for i in my_map.values():
    print(i)
print('\n'+'--------------------------------')
for i in my_map.items():
    print(i)
print('\n'+'--------------------------------')
for key, value in my_map.items():
    print(key, value)   # 输出 a 1 b 2 c 3
print('\n'+'--------------------------------')
# 访问
print(my_map["a"])
print(my_map[2])
print(my_map.get("2", "default"))  # 输出 default
print(my_map.get(3, "default"))  # 输出 default

# 添加
my_map[3] = 'ccc'
my_map["d"] = 4
print(my_map)

# 删除
my_map.pop("a")
del my_map[1]
print(my_map)

# 解包
dict1 = {"name": "Alice", "age": 25}
dict2 = {"city": "New York", "age": 30}
print({**dict1, **dict2})

# -----------------------------------------set:----------------------------------
# 定义的时候，不可能既是字典又是集合，但是可以把集合转换成字典，字典转换成集合
print('\n'+'---------------集合开始-----------------')

my_set = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
my_set2 = set((1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

print(my_set, my_set2)


# 遍历
# for i in my_set:
#     print(i)

# 访问
# print(my_set[0])  # 报错
print(1 in my_set)  # 输出 True

# 添加
my_set.add(11)
my_set.add(10)
my_set.update([12, 13, 14, 10, 14])
print(my_set)

# 删除
my_set.remove(11) #元素不存在会报错
my_set.discard(12)
my_set.pop()
print(my_set)

# 修改：结合没有下标和建，所以不存在修改操作，删除和添加都是修改操作


# 交并并集
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}
print(set1 & set2)  # 交集 输出 {4, 5}
print(set1 | set2)  # 并集 输出 {1, 2, 3, 4, 5, 6, 7, 8}
print(set1 - set2)  # 差集 输出 {1, 2, 3}
print(set2 - set1)  # 差集 输出 {8, 6, 7}
print(set1 ^ set2)  # 对称差集 输出 {1, 2, 3, 6, 7, 8}


# -----------------------------------------转换关系:----------------------------------
print('\n'+'---------------转换开始-----------------')
# 1 字典可以转为：元组，列表和集合，但必须是 key列表、value列表、（key，value）的元组列表

my_dict = {"a": 1, "b": 2, "c": 3}

print(tuple(my_dict))  # 输出 ('a', 'b', 'c')
print(list(my_dict))  # 输出 ['a', 'b', 'c']    
print(set(my_dict)) 

print(tuple(my_dict.items()))  # 输出 (('a', 1), ('b', 2), ('c', 3))
print(list(my_dict.items()))  # 输出 [('a', 1), ('b', 2), ('c', 3)]
print(set(my_dict.items()))  # 输出 {('a', 1), ('b', 2), ('c', 3)}

# 2 元组，列表，集合也可以转字典：规则很多:
print('\n'+'---------------转换开始:转字典-----------------')
# 嵌套列表
list_of_pairs = [('a', 1), ('b', 2), ('c', 3)]
print(dict(list_of_pairs))  # {'a': 1, 'b': 2, 'c': 3}

# 两个列表合并
keys = ['a', 'b', 'c']
values = [1, 2, 3]
print(dict(zip(keys, values)))  # {'a': 1, 'b': 2, 'c': 3}

# 使用索引
my_list = ['a', 'b', 'c']
print({ val:i+1 for i, val in enumerate(my_list)})  # {0: 'a', 1: 'b', 2: 'c'}

# 分组为键值对
my_list = ['a', 1, 'b', 2, 'c', 3]
print({my_list[i]: my_list[i + 1] for i in range(0, len(my_list), 2)})  # {'x': 10, 'y': 20, 'z': 30}

# `fromkeys` 方法
my_list = ['a', 'b', 'c']
print(dict.fromkeys(my_list, 100))  # {'a': 100, 'b': 100, 'c': 100}

# 3 字典转集合略有不同：因为字典的建无序且随机，多以key必须单独处理
my_set = {'a', 'b', 'c'} #可以补充键名
print({ val:i+1 for i, val in enumerate(my_set)})  # {0: 'a', 1: 'b', 2: 'c'}

my_set = {'a', 1, 'b', 2, 'c', 3} #无法有序对应
print({i : list(my_set)[i] for i in range(0, len(my_set), 2)}) 
