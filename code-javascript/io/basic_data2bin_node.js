const pack = (boolVal, intVal, floatVal, doubleVal, strVal) => {
    // 计算字符串长度（占 4 字节存储）
    const strLen = Buffer.byteLength(strVal, 'utf8');

    // 计算总大小
    const buffer = Buffer.alloc(1 + 4 + 8 + 4 +4+ strLen);

    let offset = 0;

    // 2. 写入 int（4 字节，有符号）
    buffer.writeInt32LE(intVal, offset);
    offset += 4;
    // 3. 写入 floar 字节）
    buffer.writeFloatLE(floatVal, offset);
    offset += 4;

    // 3. 写入 double（8 字节）
    buffer.writeDoubleLE(doubleVal, offset);
    offset += 8;
    // 1. 写入 bool（1 字节）
    buffer.writeUInt8(boolVal ? 1 : 0, offset);
    offset += 1;

    // 4. 写入字符串长度（4 字节，无符号）
    buffer.writeUInt32LE(strLen, offset);
    offset += 4;

    // 5. 写入字符串（变长）
    buffer.write(strVal, offset, 'utf8');

    return buffer;
};

const unpack = (buffer) => {
    let offset = 0;

    

    // 2. 读取 int（4 字节，有符号）
    const intVal = buffer.readInt32LE(offset);
    offset += 4;

    const floatVal = buffer.readFloatLE(offset);
    offset += 4;

    // 3. 读取 double（8 字节）
    const doubleVal = buffer.readDoubleLE(offset);
    offset += 8;

    // 1. 读取 bool（1 字节）
    const boolVal = buffer.readUInt8(offset) === 1;
    offset += 1;

    // 4. 读取字符串长度（4 字节）
    const strLen = buffer.readUInt32LE(offset);
    offset += 4;

    // 5. 读取字符串（变长）
    const strVal = buffer.toString('utf8', offset, offset + strLen);

    return { intVal,floatVal, doubleVal, boolVal, strVal };
};

// 示例数据
const boolVal = true;
const intVal = -12345;
const floatVal = 3.14;
const doubleVal = 3.141592653589793;
const strVal = "Hello, Binary World!";

// 封包
const packedBuffer = pack(boolVal, intVal, floatVal, doubleVal, strVal);
console.log("封包后的二进制数据：", packedBuffer);
console.log(packedBuffer.toString('hex'));

// 解包
const unpackedData = unpack(packedBuffer);
console.log("解包后的数据：", unpackedData);
