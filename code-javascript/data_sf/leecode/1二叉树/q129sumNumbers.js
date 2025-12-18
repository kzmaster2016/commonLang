import * as m from "./tools.js";
/**
 * @param {m.default} root
 * @return {number}
 */
var sumNumbers = function (root) {
    let res = 0;
    let arr = [];
    function dfs(node, path = []) {
        if (!node) {
            return
        }
        path.push(node.val);

        //叶子结点
        if (!node.left && !node.right) {
            
            console.log(...path,path);
            arr.push([...path]);//必须这样
            // arr.push(path.slice());//或者
            // arr.push(path);//这个会把最后的 空path写进去；

            let length = path.length;
            let sum = 0;
            for (let index = 0; index < path.length; index++) {
                sum += path[index] * Math.pow(10, length - index - 1);
            }
            console.log(sum);
            res+=sum;
        }

        dfs(node.left, path)
        dfs(node.right, path)
        path.pop();
    }
    dfs(root, []);

    arr.forEach(function (params) {
        console.log(params);
    });


    console.log(arr);
    return res;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let root = m.buildTree4(arr);

console.log(sumNumbers(root));