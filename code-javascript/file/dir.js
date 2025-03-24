import fs from 'fs'; 

// 检查目录是否存在
fs.stat('exampleDir', (err, stats) => {
    if (err) {
        console.log("目录不存在");
    } else if (stats.isDirectory()) {
        console.log("目录存在");
    }
});

// 创建目录
fs.mkdir('exampleDir', { recursive: true }, (err) => {
    if (err) {
        console.log("创建目录失败:", err);
    } else {
        console.log("目录创建成功");
    }
});

// 打开目录并遍历
fs.readdir('exampleDir', (err, files) => {
    if (err) {
        console.log("无法读取目录:", err);
    } else {
        console.log("目录内容:");
        files.forEach(file => {
            console.log(file);
        });
    }
});

// 删除目录
// fs.rmdir('exampleDir', (err) => {
//     if (err) {
//         console.log("删除目录失败:", err);
//     } else {
//         console.log("目录删除成功");
//     }
// });
