/**最小基因变化

基因序列可以表示为一条由 8 个字符组成的字符串，其中每个字符都是 'A'、'C'、'G' 和 'T' 之一。

假设我们需要调查从基因序列 start 变为 end 所发生的基因变化。一次基因变化就意味着这个基因序列中的一个字符发生了变化。

例如，"AACCGGTT" --> "AACCGGTA" 就是一次基因变化。
另有一个基因库 bank 记录了所有有效的基因变化，只有基因库中的基因才是有效的基因序列。（变化后的基因必须位于基因库 bank 中）

给你两个基因序列 start 和 end ，以及一个基因库 bank ，请你找出并返回能够使 start 变化为 end 所需的最少变化次数。如果无法完成此基因变化，返回 -1 。

注意：起始基因序列 start 默认是有效的，但是它并不一定会出现在基因库中。

 

示例 1：
输入：start = "AACCGGTT", end = "AACCGGTA", bank = ["AACCGGTA"]
输出：1

示例 2：
输入：start = "AACCGGTT", end = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]
输出：2

示例 3：
输入：start = "AAAAACCC", end = "AACCCCCC", bank = ["AAAACCCC","AAACCCCC","AACCCCCC"]
输出：3
*/

/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
	if (startGene === endGene) return 0;
	const bankSet = new Set(bank);
	if (!bankSet.has(endGene)) return -1;

	const genes = ['A','C','G','T'];
	const visited = new Set();
	const queue = [];
	queue.push([startGene, 0]);
	visited.add(startGene);

	while (queue.length) {
		const [cur, steps] = queue.shift();

        //变成end的时候，成功退出
		if (cur === endGene) return steps;

        //起点和终点其实没有变化方向，而是以广播的形式一层一层穷举，
		for (let i = 0; i < cur.length; i++) {
			for (const g of genes) {
                //没有变化的字符，不需查找
				if (g === cur[i]) continue;
                // console.log(cur, g, cur.slice(0, i) + g + cur.slice(i + 1));

                //相邻节点
				const next = cur.slice(0, i) + g + cur.slice(i + 1);
                //入队条件很重要
				if (!visited.has(next) && bankSet.has(next)) {
                    
					visited.add(next);
					queue.push([next, steps + 1]);
				}
			}
		}
	}

    //遍历完成没找到，失败退出
	return -1;
};

export default minMutation;