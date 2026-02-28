const LRUCache = require('./q146');

function runExample() {
  const ops = ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"];
  const args = [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]];
  const results = [];
  let obj = null;

  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    const a = args[i];
    if (op === 'LRUCache') {
      obj = new LRUCache(a[0]);
      results.push(null);
    } else if (op === 'put') {
      obj.put(a[0], a[1]);
      results.push(null);
    } else if (op === 'get') {
      results.push(obj.get(a[0]));
    }
  }

  console.log(JSON.stringify(results));
}

runExample();
