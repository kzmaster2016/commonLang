let buf = Buffer.alloc(4);
buf.writeUInt32BE(70, 0);
// buf.write('A', 0);
console.log(buf.toString('utf8')); // 输出：F
console.log(buf.toString('hex')); // 输出：41000046


let binaryStr = Array.from(buf).map(byte => byte.toString(2).padStart(8, '0')).join('');
console.log(binaryStr); 