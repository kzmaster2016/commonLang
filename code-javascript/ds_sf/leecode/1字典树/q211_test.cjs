const fs = require('fs');
// load implementation into this module scope
eval(fs.readFileSync('code-javascript/ds_sf/leecode/1字典树/q211.js','utf8'));

const wd = new WordDictionary();
wd.addWord("bad");
wd.addWord("dad");
wd.addWord("mad");
console.log('pad ->', wd.search("pad")); // expected false
console.log('bad ->', wd.search("bad")); // expected true
console.log('.ad ->', wd.search(".ad")); // expected true
console.log('b.. ->', wd.search("b..")); // expected true
console.log('done');
