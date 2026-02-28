
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === '') return 0;
    const haystackLength = haystack.length;
    const needleLength = needle.length;
    for (let i = 0; i <= haystackLength - needleLength; i++) {
        if (haystack.substring(i, i + needleLength) === needle) {
            return i;
        }
    }
    return -1;  
};