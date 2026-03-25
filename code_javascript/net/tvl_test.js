// TLV 编码
function encodeTLV(tag, value) {
    let length = value.length;
    let buffer = Buffer.alloc(2 + length);
    buffer.writeUInt8(tag, 0);
    buffer.writeUInt8(length, 1);
    buffer.write(value, 2, 'utf8');
    return buffer;
}

// TLV 解码
function decodeTLV(buffer) {
    let tag = buffer.readUInt8(0);
    let length = buffer.readUInt8(1);
    let value = buffer.toString('utf8', 2, 2 + length);
    return { tag, length, value };
}

// 测试编码
let encoded = encodeTLV(0x01, "Hello");
console.log("Encoded TLV:", encoded.toString('hex'));

// 测试解码
let decoded = decodeTLV(encoded);
console.log(`Decoded TLV: Tag=${decoded.tag}, Length=${decoded.length}, Value=${decoded.value}`);
