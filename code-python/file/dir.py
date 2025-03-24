import os

# 检查目录是否存在
if os.path.isdir(os.path.dirname(__file__)+"/exampleDir"):
    print("目录存在")
else:
    print("目录不存在")

# 创建目录
try:
    os.mkdir(os.path.dirname(__file__)+"/exampleDir")
    print("目录创建成功")
except FileExistsError:
    print("目录已存在")
except Exception as e:
    print("创建目录失败:", e)

# 打开并遍历目录
try:
    with os.scandir(os.path.dirname(__file__)+"/exampleDir") as entries:
        print("目录内容:")
        for entry in entries:
            print(entry.name)
except FileNotFoundError:
    print("无法打开目录")

# 删除目录
# try:
#     os.rmdir("exampleDir")
#     print("目录删除成功")
# except OSError as e:
#     print("删除目录失败:", e)
