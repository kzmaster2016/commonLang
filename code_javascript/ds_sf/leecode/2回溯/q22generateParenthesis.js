/**
 * 生成括号
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const res = [];
 
 
    function backtrack(cur, left, right) {
        if (left === n && right === n) {
            res.push(cur);
            return;
        }

        if(left<n){
            backtrack(cur + '(', left+1,right);
        }
        if(left>right){
            backtrack(cur + ')', left,right+1);
        }
    }
    backtrack('',0,0);


    return res;
};

console.log(generateParenthesis2(3));

//显式递归版
function generateParenthesis2(n) {
    const result = [];
    // 用数组存储当前括号字符（可变类型，方便显式回退）
    const currentArr = [];

    function backtrack(left, right) {
        // 递归终止条件：左右括号数量均等于n
        if (left === n && right === n) {
            // 将数组转为字符串，推入结果
            result.push(currentArr.join(''));
            return;
        }

        // 尝试添加左括号
        // if (left < n) {
        //     currentArr.push('('); // 入栈（尝试）
        //     backtrack(left + 1, right); // 递归
        //     currentArr.pop(); // 出栈（回退，恢复上一步状态）
        // }

        // // 尝试添加右括号
        // if (right < left) {
        //     currentArr.push(')'); // 入栈（尝试）
        //     backtrack(left, right + 1); // 递归
        //     currentArr.pop(); // 出栈（回退，恢复上一步状态）
        // }

        for (const element of ['(',')']) {
            if (element == '(' && left < n) {
                currentArr.push(element); // 入栈（尝试）
                backtrack(left + 1, right); // 递归
                currentArr.pop(); // 出栈（回退，恢复上一步状态）
            }

            // 尝试添加右括号
            if (element == ')' && right < left) {
                currentArr.push(element); // 入栈（尝试）
                backtrack(left, right + 1); // 递归
                currentArr.pop(); // 出栈（回退，恢复上一步状态）
            }
        }
    }

    backtrack(0, 0);
    return result;
}