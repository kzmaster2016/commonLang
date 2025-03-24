/**
 * commonjs模块的方式：nodejs默认的模块加载方式
 */

// const yaml = require('js-yaml');
import yaml from 'js-yaml';

// 编码：将数据转换为 YAML 格式
const data = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const yamlStr = yaml.dump(data);
console.log("YAML 编码输出:");
console.log(yamlStr);

// 解码：将 YAML 格式的字符串解析为对象
const parsedData = yaml.load(yamlStr);
console.log("YAML 解码输出:");
console.log(parsedData);


/**
 * esm模块的方式：需要在packahge.json中配置"type": "module"
 */
// import yaml from 'yaml';

// const yamlString = `
// name: Alice
// age: 25
// skills:
//   - JavaScript
//   - Python
//   - Go
// `;

// // 解析
// const parsedData = yaml.parse(yamlString);
// console.log("解析后的数据:", parsedData);


// 生成
// console.log("生成的 YAML:\n", yaml.stringify(parsedData));