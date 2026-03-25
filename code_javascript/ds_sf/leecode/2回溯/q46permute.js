
/**
 * 
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteDIY = function (nums) {
    let res = []

    function backtrack(params, path = []) {
        if (path.length === params.length) {
            // res.push([...path],path.slice());
            res.push(path.slice());
            return;
        }

        for (let index = 0; index < params.length; index++) {
            const element = params[index];
            if (!path.includes(element)) {
                path.push(element);
                backtrack(params, path);
                path.pop();
            }
        }
    }

    backtrack(nums, [])

    res.forEach((item) => {
        console.log(item);
    });
    return res;
};

console.log(permuteDIY([1, 2, 3]));


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let used = [];
    let path =[];
    let res = [];
    function backtrack() {
        if (path.length === nums.length) {
            res.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;

            used[i] = true;
            path.push(nums[i]);
            backtrack();
            path.pop();
            used[i] = false;
        }
    }
    backtrack();

    return res;
};