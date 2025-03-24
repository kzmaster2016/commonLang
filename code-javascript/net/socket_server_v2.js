const net = require("net");
const cluster = require("cluster");
const os = require("os");

if (cluster.isMaster) {
    const numCPUs = os.cpus().length;
    console.log(`Master process ${process.pid} is running`);
    
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork(); // 创建多个子进程
    }

    cluster.on("exit", (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
        cluster.fork(); // 自动重启
    });
} else {
    const server = net.createServer((socket) => {
        console.log("Client connected");
        socket.on("data", (data) => {
            console.log("Received:", data.toString());
        });
        socket.write("Hello from Node.js Server");
        socket.end();
    });

    server.listen(8080, () => {
        console.log(`Worker ${process.pid} listening on port 8080...`);
    });
}
