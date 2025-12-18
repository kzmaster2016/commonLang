// 同步方式
try {
    let a = JSON.parse('{"name": "Tom"}'); // 正常
    let b = JSON.parse('{name: Tom}');     // 错误：Invalid JSON
} catch (err) {
    console.error('捕捉到错误:', err.message, err);
}

// 异步：promise方式
function getData() {
    return new Promise((resolve, reject) => {
        reject(new Error("出错了！"));
    });
}

getData()
    .then(res => console.log(res))
    .catch(err => {

        console.error("Promise 捕获错误:", err.message)
    });

async function fetchData() {
    //try {
    const data = await getData();
    console.log(data);
    // } catch (err) {
    //     console.error("Async 捕获错误:", err.message);
    // }
}

fetchData();


// 异步：回调函数方式
import fs from 'fs';
fs.readFile('notfound.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error("读取文件失败:", err.message);
    } else {
        console.log(data);
    }
});

process.on('uncaughtException', (err) => {
    console.error('未捕获的异常:', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('未处理的 Promise 拒绝:', reason);
});

