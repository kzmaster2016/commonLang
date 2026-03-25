/**
 * 至少发表了 h 篇论文，并且 至少 有 h 篇论文被引用次数大于等于 h 。如果 h 有多种可能的值，h 指数 是其中最大的那个。
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations = citations.sort((a, b) => b - a);
    let h = 0;
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1) {//至少发布了i+1篇论文，并且至少有i+1篇论文被引用次数大于等于i+1
            h = i + 1;
        } else {
            break;
        }
    }
    return h;   
};

//test
console.log(hIndex([3,0,6,1,5]));
console.log(hIndex([0,1,3,5,6]));
console.log(hIndex([1,3,1]));