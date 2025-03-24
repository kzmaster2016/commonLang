import socket
import struct
import time

def encode_tlv(type_, value):
    length = len(value)
    return struct.pack("!BH", type_, length) + value.encode()

def decode_tlv(buffer):
    if len(buffer) < 3:
        return None, buffer
    type_, length = struct.unpack("!BH", buffer[:3])
    if len(buffer) < 3 + length:
        return None, buffer
    value = buffer[3:3+length].decode()
    return (type_, value), buffer[3+length:]

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client.connect(("127.0.0.1", 8080))
client.settimeout(30)

# 发送 TLV 消息
messages = ["Hello", "World", "TLV Protocol"]
for msg in messages:
    client.sendall(encode_tlv(1, msg))
    time.sleep(1)

# 监听服务器响应
buffer = b""
while True:
    try:
        data = client.recv(1024)
        if not data:
            break
        buffer += data
        while True:
            packet, buffer = decode_tlv(buffer)
            if not packet:
                break
            type_, value = packet
            print(f"Received: Type={type_}, Value={value}")
            client.settimeout(30)
    except socket.timeout:
        print("Connection timeout")
        break

# 发送心跳包
while True:
    client.sendall(encode_tlv(0, "heartbeat"))
    time.sleep(5)
