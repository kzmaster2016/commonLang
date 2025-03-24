import os


# 获取当前工作目录
current_dir = os.getcwd()

print(current_dir, __file__)
# 检查文件是否存在
if os.path.exists(os.path.dirname(__file__)+"/example.txt"):
    print("文件存在")
else:
    print("文件不存在")

# 创建并写入文件
with open(os.path.dirname(__file__)+"/example.txt", "w") as file:
    file.write("Hello, Python!")
    print("文件已写入")

# 读取文件
with open(os.path.dirname(__file__)+"/example.txt", "r") as file:
    content = file.read()
    print(f"文件内容: {content}")

# 删除文件
# try:
#     os.remove(os.path.dirname(__file__)+"/example.txt",)
#     print("文件已删除")
# except FileNotFoundError:
#     print("文件未找到")
