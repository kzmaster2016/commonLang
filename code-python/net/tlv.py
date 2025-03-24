import struct

# TLV 编码
def encode_tlv(tag, value):
    length = len(value)
    return struct.pack("BB", tag, length) + value.encode("utf-8")

# TLV 解码
def decode_tlv(data):
    tag, length = struct.unpack("BB", data[:2])
    value = data[2:2+length].decode("utf-8")
    return {"tag": tag, "length": length, "value": value}

# 测试编码
encoded = encode_tlv(0x01, "Hello")
print("Encoded TLV:", encoded.hex())

# 测试解码
decoded = decode_tlv(encoded)
print(f"Decoded TLV: Tag={decoded['tag']}, Length={decoded['length']}, Value={decoded['value']}")
