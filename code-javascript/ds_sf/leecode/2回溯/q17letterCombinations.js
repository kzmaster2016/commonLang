function letterCombinations(digits) {
    if (!digits || digits.length === 0) return [];

    const map = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    const res = [];

    function backtrack(digits, index, path){
        if(index === digits.length){
            res.push(path.join(''));
            return;
        }
        let items = map[digits[index]];
        console.log(items,items.length); 
         
        for (let i = 0; i < items.length; i++) {
            path.push(items[i]);
            backtrack(digits, index+1, path);
            path.pop();
        }

    }


    backtrack(digits, 0, []);
    return res;
}

// 测试
console.log(letterCombinations("23"));
// 输出示例: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
