import base64

# 原始字符串
data = "Hello, Base64!匡正"

# 编码
encoded = base64.b64encode(data.encode()).decode()
print("Encoded:", encoded)

# 解码
decoded = base64.b64decode(encoded).decode()
print("Decoded:", decoded)