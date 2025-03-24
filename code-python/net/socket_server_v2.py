import socket
import threading

def handle_client(conn, addr):
    print(f"Client connected: {addr}")
    data = conn.recv(1024)
    print("Received:", data.decode())
    conn.sendall(b"Hello from Python Server")
    conn.close()

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(("0.0.0.0", 8080))
server.listen(5)
print("Server listening on port 8080...")

while True:
    conn, addr = server.accept()
    thread = threading.Thread(target=handle_client, args=(conn, addr))
    thread.start()

# 多进程版本
import socket
import multiprocessing

def handle_client(conn, addr):
    print(f"Client connected: {addr}")
    data = conn.recv(1024)
    print("Received:", data.decode())
    conn.sendall(b"Hello from Python Server")
    conn.close()

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(("0.0.0.0", 8080))
server.listen(5)
print("Server listening on port 8080...")

while True:
    conn, addr = server.accept()
    process = multiprocessing.Process(target=handle_client, args=(conn, addr))
    process.start()
