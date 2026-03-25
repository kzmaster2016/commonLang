
// 定义函数:不支持参数类型
function introduce(name = "Anonymous", age, ...hobbies) {
    if (!age) return "Age is required!";

    let intro = `Hi, I'm ${name}. I'm ${age} years old.`;
    if (hobbies.length > 0) {
        intro += ` My hobbies are: ${hobbies.join(", ")}.`;
    }
    return intro;
}

// 调用函数
console.log(introduce("Alice", age=25, "reading", "cycling", "traveling"));



// let uniqueWords3 = wordsArray.reduce((acc,cur) => {
//     if(acc.indexOf(cur) === -1){
//         acc.push(cur);
//     }
//     return acc;
// },[]);
// console.log(uniqueWords3,uniqueWords3.length);

