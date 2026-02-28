
import path from 'path';
//定义根目录变量:当前目录的父目录
global.rootDir = path.resolve('../../');
console.log(global.rootDir);

export default global;
export const rootDir = global.rootDir;