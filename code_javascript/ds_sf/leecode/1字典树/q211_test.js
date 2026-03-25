const fs = require('fs');
// load implementation into this module scope
eval(fs.readFileSync('code-javascript/ds_sf/leecode/1字典树/q211.js','utf8'));

const wd = new WordDictionary();
wd.addWord("bad");
wd.addWord("dad");
wd.addWord("mad");
console.log(wd.search("pad")); // expected false
console.log(wd.search("bad")); // expected true
console.log(wd.search(".ad")); // expected true
console.log(wd.search("b..")); // expected true
