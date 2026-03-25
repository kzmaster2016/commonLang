const net = require("net");

const server = net.createServer((socket) => {
    console.log("Client connected");
    socket.on("data", (data) => {
        console.log("Received:", data.toString());
    });
    socket.write("Hello from Node.js Server");
    socket.end();
});

server.listen(8080, () => {
    console.log("Server listening on port 8080...");
});
