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

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('__filename:', __filename);
console.log('__dirname:', __dirname);


import fs from 'fs'
fs.readFile(__dirname+'/exampleDir/example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('无法读取文件:', err);
        return;
    }
    console.log('文件内容:', data);
});

fs.readFile(path.join(__dirname, '/exampleDir/example.txt'), 'utf8', (err, data) => {
    if (err) {
        console.error('无法读取文件:', err);
        return;
    }
    console.log('文件内容:', data);
});


/**
 * CommonJS	ES Module (等效写法)
__dirname	path.dirname(fileURLToPath(import.meta.url))
__filename	fileURLToPath(import.meta.url)
 */