import fs from 'fs';
import fastcsv from 'fast-csv';

// 编码：将数据写入 CSV 文件
const data = [
  ["Name", "Age", "City"],
  ["John", "30", "New York"],
  ["Alice", "25", "London"]
];

const ws = fs.createWriteStream("output.csv");
fastcsv
  .write(data, { headers: false })
  .pipe(ws);

console.log("CSV 文件已成功创建。");

// 解码：从 CSV 文件读取数据
fs.createReadStream("output.csv")
  .pipe(fastcsv.parse({ headers: false }))
  .on('data', (row) => {
    console.log(row);
  });