import importlib.util
import sys
import os

# 获取目标文件路径
# file_path = os.path.abspath("../functions/tools.py")  #默认是基于脚本实行目录

# 基于当前脚本所在目录
base_path = os.path.dirname(os.path.abspath(__file__))
file_path = os.path.join(base_path, "../functions/tools.py")
# 加载模块
spec = importlib.util.spec_from_file_location("script", file_path)
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)

# 调用模块函数
print(module.str_list_unique)