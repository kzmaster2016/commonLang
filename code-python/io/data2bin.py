import struct

# 封包函数
def pack_data(data):
    packed_data = b''

    # 打包整数（包括负整数）
    packed_data += struct.pack('l', data['int'])

    # 打包浮动数
    packed_data += struct.pack('f', data['float'])

    # 打包双精度浮动数
    packed_data += struct.pack('d', data['double'])

    # 打包布尔值
    packed_data += struct.pack('?', data['bool'])

    # 打包字符串
    packed_data += struct.pack('l', len(data['string'])) + data['string'].encode('utf-8')

    return packed_data

# 解包函数
def unpack_data(binary_data):
    data = {}
    offset = 0

    # 解包整数（包括负整数）
    data['int'], = struct.unpack_from('l', binary_data, offset)
    offset += 4

    # 解包浮动数
    data['float'], = struct.unpack_from('f', binary_data, offset)
    offset += 4

    # 解包双精度浮动数
    data['double'], = struct.unpack_from('d', binary_data, offset)
    offset += 8

    # 解包布尔值
    data['bool'], = struct.unpack_from('?', binary_data, offset)
    offset += 1

    # 解包字符串
    str_len, = struct.unpack_from('l', binary_data, offset)
    offset += 4
    data['string'] = binary_data[offset:offset + str_len].decode('utf-8')

    return data

# 示例数据
data = {
    'int': -12345,
    'float': 3.14,
    'double': 3.141592653589793,
    'bool': True,
    'string': 'Hello, Binary World!'
}

# 封包数据
binary_data = pack_data(data)

# 输出封包后的二进制数据
print(binary_data.hex())

# 解包数据
unpacked_data = unpack_data(binary_data)

# 输出解包后的数据
print(unpacked_data)

