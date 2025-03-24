const net = require("net");

const server = net.createServer((socket) => {
    console.log("Client connected");

    socket.setTimeout(30000); // 设置超时 30 秒
    socket.on("timeout", () => {
        console.log("Connection timeout");
        socket.end();
    });

    const interval = setInterval(() => {
        if (socket.destroyed) {
            clearInterval(interval);
        } else {
            socket.write("PING\n");
        }
    }, 10000); // 每 10 秒发送心跳

    socket.on("data", (data) => {
        console.log("Received:", data.toString().trim());
        socket.setTimeout(30000); // 重置超时
    });

    socket.on("end", () => {
        clearInterval(interval);
        console.log("Client disconnected");
    });
});

server.listen(8080, () => {
    console.log("Server listening on port 8080...");
});
