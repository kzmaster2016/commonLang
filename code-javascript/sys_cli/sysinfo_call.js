import os from 'os';
import { exec } from 'child_process';

// 获取系统架构
console.log("OS:", os.type(), os.platform(), os.release());
console.log("Architecture:", os.arch());

// 获取 CPU 信息
console.log("CPU Cores:", os.cpus().length);

// 获取内存信息
console.log("Total Memory:", os.totalmem() / 1024 / 1024 / 1024, "GB");
console.log("Free Memory:", os.freemem() / 1024 / 1024 / 1024, "GB");

// 获取磁盘信息 (使用 'child_process' 运行 'df -h' 命令)

// exec('df -h', (error, stdout, stderr) => {
//     if (error) {
//         console.error("Error:", stderr);
//         return;
//     }
//     console.log("Disk Usage:\n", stdout);
// });

(new Promise(function (resolve, reject) {
    exec('wmic logicaldisk get size,freespace,caption', (error, stdout, stderr) => {
        if (error) {
            console.error("Error:", stderr);
            return;
        }
        console.log("Disk Usage:\n", stdout);
        resolve('');
    });
})).then(function (res) {
    console.log("PATH:", process.env.PATH);
    console.log("All Environment Variables:", process.env);
    return Promise.resolve('');
}).then(function (res) {
    exec('dir', (error, stdout, stderr) => {
        if (error) {
            console.error("Error:", stderr);
            return;
        }
        console.log("Command Output:\n", stdout);
        return Promise.resolve('');
    });
    
}).catch(function (res) {

    console.log("catch error" + res);
});








