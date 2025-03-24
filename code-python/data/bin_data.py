# 创建
# 使用字节字面量
b1 = b'hello'  # 字符串字节表示
b2 = b'\x48\x65\x6c\x6c\x6f'  # 十六进制表示
print(b1)  # 输出：b'hello'
print(b2)  # 输出：b'Hello'

# 使用 bytes() 函数
b3 = bytes([72, 101, 108, 108, 111])  # 数字列表：十进制
print(b3)  # 输出：b'Hello'

# 创建空字节序列
empty_bytes = bytes(5)
print(empty_bytes)  # 输出：b'\x00\x00\x00\x00\x00'


data = b'hello'
print(data[0])  # 输出：104 (ASCII 'h')
print(data[1:4])  # 输出：b'ell'
print(len(data))  # 输出：5

data1 = b'hello'
data2 = b'world'
print(data1 + data2)  # 输出：b'helloworld'
print(data1 * 2)  # 输出：b'hellohello'
for byte in data:
    print(byte, end=' ')  # 输出：104 101 108 108 111

# 字符串 -> 字节
text = "hello"
data = text.encode('utf-8')  # 编码为 UTF-8
print(data)  # 输出：b'hello'

# 字节 -> 字符串
decoded_text = data.decode('utf-8')  # 解码为字符串
print(decoded_text)  # 输出：hello

# 整数 -> 字节
integer = 255
byte_data = integer.to_bytes(2, byteorder='big')  # 大端序
print(byte_data)  # 输出：b'\x00\xff'

# 字节 -> 整数
restored_integer = int.from_bytes(byte_data, byteorder='big')
print(restored_integer)  # 输出：255


import struct
# 打包
data = struct.pack('>I4sh', 1, b'test', 256)
print(data)  # 输出：b'\x00\x00\x00\x01test\x01\x00'

# 解包
unpacked = struct.unpack('>I4sh', data)
print(unpacked)  # 输出：(1, b'test', 256)


import base64
# 编码
data = b'hello world'
encoded = base64.b64encode(data)
print(encoded)  # 输出：b'aGVsbG8gd29ybGQ='

# 解码
decoded = base64.b64decode(encoded)
print(decoded)  # 输出：b'hello world'

# 位操作
a = 0b1101
b = 0b1011
print(bin(a & b))  # 输出：0b1001
print(bin(a | b))  # 输出：0b1111
print(bin(a ^ b))  # 输出：0b0110
print(bin(~a & 0b1111))  # 输出：0b0010
print(bin(a << 1))  # 输出：0b11010
print(bin(a >> 1))  # 输出：0b0110