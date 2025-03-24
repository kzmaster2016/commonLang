import socket
import struct
import threading

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

def handle_client(conn, addr):
    print(f"Client connected: {addr}")
    conn.settimeout(30)
    
    buffer = b""
    
    while True:
        try:
            data = conn.recv(1024)
            if not data:
                break
            buffer += data
            while True:
                packet, buffer = decode_tlv(buffer)
                if not packet:
                    break
                type_, value = packet
                print(f"Received: Type={type_}, Value={value}")
                conn.settimeout(30)
        except socket.timeout:
            print("Connection timeout")
            break

    conn.close()
    print("Client disconnected")

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(("0.0.0.0", 8080))
server.listen(5)
print("Server listening on port 8080...")

while True:
    conn, addr = server.accept()
    threading.Thread(target=handle_client, args=(conn, addr)).start()
