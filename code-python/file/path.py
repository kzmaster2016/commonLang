import os
from pathlib import Path

file_path = "./dir/subdir/example.txt"

# 获取绝对路径
abs_path = os.path.abspath(file_path)

# 获取目录名
dir_name = os.path.dirname(file_path)

# 获取文件名
file_name = os.path.basename(file_path)

# 获取扩展名
ext = os.path.splitext(file_path)[1]

# 路径拼接
new_path = os.path.join(dir_name, "newfile.txt")

print("绝对路径:", abs_path)
print("目录名:", dir_name)
print("文件名:", file_name)
print("文件名无后缀:", file_name)
print("扩展名:", ext)
print("拼接路径:", new_path)
