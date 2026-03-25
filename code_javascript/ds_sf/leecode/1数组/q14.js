
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";
    let prefix = '';

    let count = 0;
    for (let j = 0; j < strs[0].length; j++) {
        //循环遍历每个字符串
        for (let i = 1; i < strs.length; i++) {
            if (strs[0][j] === strs[i][j]) {
                count++;
            } else {
                return prefix;
            }
        }
        if (count === strs.length - 1) {
            count = 0;
            prefix += strs[0][j];
        }
    }
    return prefix;
};