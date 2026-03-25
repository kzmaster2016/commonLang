let str = "apple123app123le";

// 只替换第一个 "apple"
let result = str.replace(/apple/g, "orange");
console.log(result);  // "orange, apple, apple"

console.log("abcde".slice(0,-1))

console.log(str.lastIndexOf("123"),str.length)



let arr = [10, 20, 30, 40, 50];
let newArr = arr.splice(1, 1, 25, 35);
console.log(arr,newArr);      // [10, 25, 35, 40, 50]，原数组被修改