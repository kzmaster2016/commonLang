import redis

r = redis.Redis(host='192.168.4.195', port=6379, db=0)

# 写入
r.set('namepy', 'David2')

# 读取
print(r.get('namepy').decode())

# 删除
# r.delete('namepy')
