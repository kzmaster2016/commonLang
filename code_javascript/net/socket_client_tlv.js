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

const client = new net.Socket();
client.connect(8080, "127.0.0.1", () => {
    console.log("Connected to server");

    // 发送 TLV 消息
    ["Hello", "World", "TLV Protocol"].forEach((msg, i) => {
        setTimeout(() => client.write(encodeTLV(1, msg)), i * 1000);
    });

    // 发送心跳包
    setInterval(() => client.write(encodeTLV(0, "heartbeat")), 5000);
});

let buffer = Buffer.alloc(0);

client.on("data", (data) => {
    buffer = Buffer.concat([buffer, data]);
    while (true) {
        let packet = decodeTLV(buffer);
        if (!packet) break;
        console.log(`Received: Type=${packet.type}, Value=${packet.value}`);
        buffer = packet.remaining;
    }
});

client.on("close", () => console.log("Connection closed"));
