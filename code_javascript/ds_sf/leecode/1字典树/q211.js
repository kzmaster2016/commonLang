// 211. 添加与搜索单词 - 数据结构设计
var WordDictionary = function() {
	this.children = {};
	this.isEnd = false;
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
	let node = this;
	for (let i = 0; i < word.length; i++) {
		const ch = word[i];
		if (!node.children[ch]) {
			node.children[ch] = { children: {}, isEnd: false };
		}
		node = node.children[ch];
	}
	node.isEnd = true;
};


/** 
 * @param {string} prefix 
 * @return {boolean}
 */
WordDictionary.prototype.search = function(prefix) {

	const dfs = (node, i) => {
		if (i === prefix.length) return !!node.isEnd;
		const ch = prefix[i];
		if (ch !== '.') {
			const child = node.children[ch];
			if (!child) return false;
			return dfs(child, i + 1);
		} else {
			for (const key in node.children) {
				if (dfs(node.children[key], i + 1)) return true;
			}
			return false;
		}
	};

	return dfs(this, 0);
};