
// 原始字符串
let data = "Hello, Base64!匡正";

// 编码
let encoded = btoa(unescape(encodeURIComponent(data)));
console.log("Encoded:", encoded);

// 解码
let decoded = decodeURIComponent(escape(atob(encoded)));
console.log("Decoded:", decoded);

import * as mo from "./fs"
import {df2} from "./fs"

console.log(mo,df2)