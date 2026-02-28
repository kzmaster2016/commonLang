/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    if (tokens.length ===0) {
        return 0;
    }

    let methods = ['+', '-', '*', '/'];
    let stack = [];

    let res = 0;
    for (let index = 0; index < tokens.length; index++) {
        const element = tokens[index];
        //需要计算和出栈
        if (methods.includes(element)) {
            let second = stack.pop();
            let first = stack.pop();
            
            
            switch (element) {
                case '+':
                    res = first + second;
                    break;
                case '-':
                    res = first - second;
                    break;
                case '+':
                    res = first + second;
                    break;
                case '*':
                    res = first * second;
                    break;
                case '/':
                    res = Math.trunc(first / second);
                    break;
                case '-':
                    res = first - second;
                    break;
            
                default:
                    break;
            }

            stack.push(res);
            
        }
        //入栈
        else{
            stack.push(parseInt(element));
        }
    }
    
    return res;
};