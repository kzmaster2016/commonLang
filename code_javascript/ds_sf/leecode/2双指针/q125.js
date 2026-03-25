/**
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 * @param {*} s 
 * @returns 
 */

var isPalindrome = function(s) {
    let l = 0, r = s.length - 1;

    while (l < r) {
        while (l < r && !isAlphaNum(s[l])) l++;
        while (l < r && !isAlphaNum(s[r])) r--;

        if (s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false;
        }
        l++;
        r--;
    }

    return true;
};

function isAlphaNum(ch) {
    return /^[a-zA-Z0-9]$/.test(ch);
}