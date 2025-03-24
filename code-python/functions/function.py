x = 10

# -----------------------作用域和闭包-------------------------
def outer():
    x = 20  # x 在外部函数中定义
    global y
    y = 100

    def inner():
        nonlocal x  # nonlocal 重新修改x内部函数才能修改x的值
        x = 50
        print(x)  # 内部函数可以访问外部函数的 x

    inner()

    print(x)  # 内部函数可以访问外部函数的 x


# -------------------------可变参数与返回值-------------------------
# 示例：*args
def sum_all(*args):
    return sum(args)
print(sum_all(1, 2, 3, 4))  # 输出：10


# 示例：**kwargs :多个键值对参数
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

    return 1, 2, 3  # 返回多个值, 元组类型
print(print_info(name="Alice", age=25, job="Developer"))


# -------------------------参数和返回值类型研究-------------------------
# 参数默认值(需放在后面)、命名传递或顺序传递、返回值类型（不支持多返回值，）
# 参数类型也仅仅只是为了提示，不能报错
def multiply(a: int, b: int = 10) -> int:
    return a * b, f"Hello,and you are {b} years old!"


print(multiply(a=3, b='5'))  # 输出：'555'
print(multiply(b=4, a=3))  # 输出：12
print(multiply(a=3))  # 输出：30
print(multiply(4))  # 输出：40



if __name__ == '__main__':
    print('call function.py')
