import socket

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(("0.0.0.0", 8080))
server.listen(1)
print("Server listening on port 8080...")

while True:
    conn, addr = server.accept()
    print("Client connected:", addr)
    data = conn.recv(1024)
    print("Received:", data.decode())
    conn.sendall(b"Hello from Python Server")
    conn.close()
