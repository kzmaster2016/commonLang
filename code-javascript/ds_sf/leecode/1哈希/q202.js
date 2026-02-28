
/**
编写一个算法来判断一个数 n 是不是快乐数。

「快乐数」 定义为：

对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
如果这个过程 结果为 1，那么这个数就是快乐数。
如果 n 是 快乐数 就返回 true ；不是，则返回 false 。
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const getNext = (num) => {
        console.log('getNext', num);
        let totalSum = 0;
        while (num > 0) {
            let digit = num % 10;//求 余数
            console.log(num, digit);
            totalSum += digit * digit;
            num = Math.floor(num / 10);//向下取整
        }
        return totalSum;
    };

    let seen = new Set();
    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = getNext(n);

        console.log(n);
    }
    return n === 1;
}

//test
console.log(isHappy(1319)); // true