/**
 * 有效的括号
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。
 */


/**
 * @param {string} s
 * @return {boolean}
 */
var isValidDIY = function (s = '') {
    let stack = [];
    let map = {
        ')': '(',
        '}': '{',
        ']': '[',
    };
    let left = [];
    let right = [];

    for (const key in map) {
        if (!Object.hasOwn(map, key)) continue;

        const element = map[key];

        left.push(element);
        right.push(key);
    }

    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        //需要判断左右


        if (left.includes(element)) {
            //左括号直接入栈
            stack.push(element);

        } else {
            // 如果栈中没有 对应的左括号直接false
            if (!stack.includes(map[element])) {
                return false;
            }
            
            //出栈
            if(stack[stack.length - 1] == map[element]){
                stack.pop();
            }else{
                stack.push(element);
            }
        }
    }

    console.log(stack);
    return stack.length === 0 ? true : false;
};

//标准答案
function isValid(s) {
    // 1. 建立右括号 -> 对应左括号的映射表
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    // 2. 初始化空栈，用于存储左括号
    const stack = [];

    // 3. 遍历字符串的每个字符
    for (const char of s) {
        // 判断当前字符是否是右括号（映射表中存在该键）
        if (bracketMap.hasOwnProperty(char)) {
            // 栈为空 或 栈顶元素与当前右括号对应的左括号不匹配，返回false
            if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
                return false;
            }
        } else {
            // 左括号：压入栈中，等待匹配
            stack.push(char);
        }
    }

    // 4. 遍历结束后，栈为空则所有括号都匹配成功，否则失败
    return stack.length === 0;
}