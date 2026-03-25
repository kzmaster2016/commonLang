const net = require("net");

function encodeTLV(type, value) {
    let buffer = Buffer.alloc(3 + value.length);
    buffer.writeUInt8(type, 0);
    buffer.writeUInt16BE(value.length, 1);
    buffer.write(value, 3);
    return buffer;
}

function decodeTLV(buffer) {
    if (buffer.length < 3) return null;
    let type = buffer.readUInt8(0);
    let length = buffer.readUInt16BE(1);
    if (buffer.length < 3 + length) return null;
    return { type, value: buffer.toString("utf8", 3, 3 + length), remaining: buffer.slice(3 + length) };
}

const server = net.createServer((socket) => {
    console.log("Client connected");
    socket.setTimeout(30000);

    const interval = setInterval(() => {
        if (socket.destroyed) {
            clearInterval(interval);
        } else {
            socket.write("PING\n");
        }
    }, 10000); // 每 10 秒发送心跳

    let buffer = Buffer.alloc(0);

    socket.on("data", (data) => {
        buffer = Buffer.concat([buffer, data]);
        while (true) {
            let packet = decodeTLV(buffer);
            if (!packet) break;
            console.log(`Received: Type=${packet.type}, Value=${packet.value}`);
            buffer = packet.remaining;
        }
    });

    socket.on("timeout", () => {
        console.log("Connection timeout");
        socket.end();
    });

    
     
    socket.on("end", () => {
        clearInterval(interval);
        console.log("Client disconnected");
    });
});

server.listen(8080, () => console.log("Server listening on port 8080..."));
