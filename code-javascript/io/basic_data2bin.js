function packData(data) {
    const buffer = new ArrayBuffer(21 + data.string.length);
    const view = new DataView(buffer);
    let offset = 0;

    // 打包整数（包括负整数）
    view.setInt32(offset, data.int,true);
    offset+=4;

    // 打包浮动数
    view.setFloat32(offset, data.float,true);
    offset+=4;

    // 打包双精度浮动数
    view.setFloat64(offset, data.double,true);
    offset+=8;

    // 打包布尔值
    view.setUint8(offset, data.bool ? 1 : 0);
    offset+=1;

    // 打包字符串
    const strLen = data.string.length;
    view.setInt32(offset, strLen,true);
    offset+=4;

    for (let i = 0; i < strLen; i++) {

        view.setUint8(offset, data.string.charCodeAt(i));
        offset+=1;
    }

    return new Uint8Array(buffer);
}

function unpackData(binaryData) {
    const data = {};
    const view = new DataView(binaryData.buffer);

    // 解包整数（包括负整数）
    data.int = view.getInt32(0,true);

    // 解包浮动数
    data.float = view.getFloat32(4,true);

    // 解包双精度浮动数
    data.double = view.getFloat64(8,true);

    // 解包布尔值
    data.bool = view.getUint8(16) === 1;

    // 解包字符串
    const strLen = view.getInt32(17,true);
    let str = '';
    for (let i = 0; i < strLen; i++) {
        str += String.fromCharCode(view.getUint8(21 + i));
    }
    data.string = str;

    return data;
}

// 示例数据
const data = {
    int: -12345,
    float: 3.14,
    double: 3.141592653589793,
    bool: true,
    string: 'Hello, Binary World!'
};

// 封包数据
const binaryData = packData(data);

// 输出封包后的二进制数据
console.log(new Uint8Array(binaryData));

const hexString = Array.from(new Uint8Array(binaryData), byte => byte.toString(16).padStart(2, '0')).join('');

console.log(hexString); // 输出: "0a ff 10 80"

// 解包数据
const unpackedData = unpackData(binaryData);

// 输出解包后的数据
console.log(unpackedData);
