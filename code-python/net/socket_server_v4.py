import socket
import struct
import threading

def encode_tlv(type_, value):
    length = len(value)
    return struct.pack("!BH", type_, length) + value.encode()

def decode_tlv(data):
    if len(data) < 3:
        return None, None
    type_ = data[0]
    length = struct.unpack("!H", data[1:3])[0]
    value = data[3:3+length].decode()
    return type_, value

def handle_client(conn, addr):
    print(f"Client connected: {addr}")
    conn.settimeout(30)

    def send_heartbeat():
        try:
            conn.sendall(encode_tlv(0x02, "PING"))
            threading.Timer(10, send_heartbeat).start()
        except:
            conn.close()

    send_heartbeat()

    try:
        while True:
            data = conn.recv(1024)
            if not data:
                break
            type_, value = decode_tlv(data)
            print(f"Received: Type={type_}, Value={value}")
            conn.settimeout(30)
    except socket.timeout:
        print("Connection timeout")
    finally:
        conn.close()
        print("Client disconnected")

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(("0.0.0.0", 8080))
server.listen(5)
print("Server listening on port 8080...")

while True:
    conn, addr = server.accept()
    threading.Thread(target=handle_client, args=(conn, addr)).start()
