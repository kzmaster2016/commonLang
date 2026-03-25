function LRUCache(capacity) {
  this.capacity = capacity;
  this.cache = new Map();
  this.head = { prev: null, next: null };
  this.tail = { prev: this.head, next: null };
  this.head.next = this.tail;
}

LRUCache.prototype.get = function (key) {
  if (!this.cache.has(key)) {
    return -1;
  }
  var node = this.cache.get(key);
  this.moveToHead(node);
  return node.value;
};

LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    var node = this.cache.get(key);
    node.value = value;
    this.moveToHead(node);
  } else {
    if (this.cache.size === this.capacity) {
      var lru = this.tail.prev;
      this.cache.delete(lru.key);
      this.removeNode(lru);
    }
    var newNode = { key: key, value: value, prev: null, next: null };
    this.cache.set(key, newNode);
    this.addToHead(newNode);
  }
};

LRUCache.prototype.moveToHead = function (node) {
  this.removeNode(node);
  this.addToHead(node);
};

LRUCache.prototype.addToHead = function (node) {
  node.prev = this.head;
  node.next = this.head.next;
  this.head.next.prev = node;
  this.head.next = node;
};

LRUCache.prototype.removeNode = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
};

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
