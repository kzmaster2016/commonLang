import fs from 'fs'

// 检查文件是否存在
fs.exists('example.txt', (exists) => {
    if (exists) {
        console.log('文件存在');
    } else {
        console.log('文件不存在');
    }
});

// 创建并写入文件
fs.writeFile('example.txt', 'Hello, JavaScript!', (err) => {
    if (err) {
        console.error('文件写入失败:', err);
        return;
    }
    console.log('文件已写入');
});

// 读取文件
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('无法读取文件:', err);
        return;
    }
    console.log('文件内容:', data);
});

// 删除文件
// fs.unlink('example.txt', (err) => {
//     if (err) {
//         console.error('删除文件失败:', err);
//     } else {
//         console.log('文件已删除');
//     }
// });
