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
    let value = buffer.slice(3, 3 + length).toString();
    return { type, value };
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

    socket.on("data", (data) => {
        let tlv = decodeTLV(data);
        if (tlv) {
            console.log(`Received: Type=${tlv.type}, Value=${tlv.value}`);
            socket.setTimeout(30000);
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

server.listen(8080, () => {
    console.log("Server listening on port 8080...");
});
