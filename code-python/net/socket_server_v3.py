import socket
import threading

def handle_client(conn, addr):
    print(f"Client connected: {addr}")
    conn.settimeout(30)  # 设置超时 30 秒
    
    def send_heartbeat():
        try:
            conn.sendall(b"PING\n")
            threading.Timer(10, send_heartbeat).start()  # 每 10 秒发送心跳
        except:
            conn.close()

    send_heartbeat()

    try:
        while True:
            data = conn.recv(1024)
            if not data:
                break
            print("Received:", data.decode().strip())
            conn.settimeout(30)  # 重置超时
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
