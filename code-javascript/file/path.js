import path from 'path'

const filePath = "./dir/subdir/example.txt";

// 获取绝对路径
const absPath = path.resolve(filePath);

// 获取目录名
const dir = path.dirname(filePath);

// 获取文件名
const fileName = path.basename(filePath);

// 获取扩展名
const ext = path.extname(filePath);

// 路径拼接
const newPath = path.join(dir, "newfile.txt");

console.log("绝对路径:", absPath);
console.log("目录名:", dir);
console.log("文件名:", fileName);
console.log("文件名无后缀:", fileName.slice(0,-ext.length));
console.log("扩展名:", ext);
console.log("拼接路径:", newPath);
