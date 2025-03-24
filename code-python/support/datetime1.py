
import time
from datetime import timezone,datetime

# print(time.tzname)  # 返回当前时区名称
print(time.timezone)  # 返回 UTC 偏移量（单位：秒）
print(time.localtime().tm_zone)  # 获取当前时区名称


# 获取当前本地时间
local_time = datetime.now()
print(local_time,local_time.timestamp())

# 获取当前 UTC 时间
# utc_time = datetime.now(timezone.utc)
# print(utc_time)

# print(datetime(2025, 2, 18, 6, 30, 0, tzinfo=timezone.utc))
from zoneinfo import ZoneInfo

print(datetime.fromtimestamp(local_time.timestamp(), tz=ZoneInfo("Asia/Shanghai")).strftime("%Y-%m-%d %H:%M:%S"))  # 本地时间转 UTC 时间