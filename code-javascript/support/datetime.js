
process.env.TZ = 'UTC';
console.log(new Date().toString());  

const date = new Date();
const timezoneOffset = date.getTimezoneOffset();  // 返回当前时区与 UTC 的分钟差
console.log(timezoneOffset, date.toLocaleString());  // 比如输出：-480，表示 UTC-8

const timezone = (new Intl.DateTimeFormat()).resolvedOptions().timeZone;
console.log(timezone);  // 比如输出：Asia/Shanghai

// 没有直接提供设置时区的功能，但可以通过 toLocaleString 方法来实现
const date2 = new Date();
const formattedDate = date2.toLocaleString('en-US', { timeZone: 'UTC' });
console.log(formattedDate);  // 输出：例如：2/18/2025, 4:32:00 AM


new Date(2025, 1, 18, 14, 30, 0)

const df="asda"
export default df

export const df2="asda2"

export const df3=function(){
    console.log("asda3")
}