from functools import reduce
import re


str = '''
天地风雷    水火山泽 
天地 
'''
print(str)

# 去掉空白字符
str = re.sub(r"\s+", "", str,0 ,re.IGNORECASE|re.S)
print(str)

 


# 拆分为列表
# str_list = list(str)
# str_list = " ".join(str).split(' ')
str_list = [char for key, char in enumerate(str)]
# str_list2 = [str[key] for key in range(len(str))] #有一个range函数，可以生成一个整数序列，再用for循环遍历这个序列
print(str_list)


# 找出重复字符，列表去重
str_list_unique = list(set(str_list))
print(str_list_unique)

# 列表去重：filter函数只能传一个参数
print([item[1] for item in filter(lambda k: k[0] != str_list.index(k[1]), enumerate(str_list))])
# print([(i,num)[1] for i, num in enumerate(str_list) if i != str_list.index(num)])
# print([num for i, num in enumerate(str_list) if i != str_list.index(num)])

# 列表去重：reduce列表去重


def do_reduce(item, num):
    if num not in item["cache"]:
        item["dup"].append(num)
        item["cache"][num] = 1
    else:
        item["cache"][num] += 1
    return item


str_list_unique2 = reduce(do_reduce, str_list, {"dup": [], "cache": {}})
print(str_list_unique2["dup"])

print(re.match(r"world", "hello world"))
print(re.search(r"^world", "hello world"))

