/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const map1 = new Map();
    const map2 = new Map();
    for (let i = 0; i < s.length; i++) {
        const char1 = s[i];
        const char2 = t[i];
        if (map1.has(char1)) {
            if (map1.get(char1) !== char2) {
                return false;
            }
        } else {
            map1.set(char1, char2);
        }
        if (map2.has(char2)) {
            if (map2.get(char2) !== char1) {
                return false;
            }
        } else {
            map2.set(char2, char1);
        }
    }
    return true;
};

