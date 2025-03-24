import os
import platform
import psutil
import subprocess

# 获取系统架构
print("OS:", platform.system(), platform.release())
print("Architecture:", platform.architecture()[0])

# 获取 CPU 信息
print("CPU Cores:", psutil.cpu_count(logical=True))

# 获取内存信息
mem = psutil.virtual_memory()
print("Total Memory:", mem.total / 1024 / 1024 / 1024, "GB")
print("Available Memory:", mem.available / 1024 / 1024 / 1024, "GB")

# 获取磁盘信息
disk = psutil.disk_usage('/')
print("Disk Total:", disk.total / 1024 / 1024 / 1024, "GB")
print("Disk Free:", disk.free / 1024 / 1024 / 1024, "GB")


print("PATH:", os.environ.get("PATH"))
print("All Environment Variables:", os.environ)


result = subprocess.run("ipconfig", shell=True, capture_output=True, text=True)
print("Command Output:\n", result.stdout)