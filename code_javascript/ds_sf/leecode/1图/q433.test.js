'use strict';
import assert from 'assert';
import minMutation from './q433.js';

function runTests() {
  assert.strictEqual(minMutation('AACCGGTT', 'AACCGGTA', ['AACCGGTA']), 1);
  assert.strictEqual(
    minMutation('AACCGGTT', 'AAACGGTA', ['AACCGGTA','AACCGCTA','AAACGGTA']),
    2
  );
  assert.strictEqual(
    minMutation('AAAAACCC', 'AACCCCCC', ['AAAACCCC','AAACCCCC','AACCCCCC']),
    3
  );

  assert.strictEqual(minMutation('AACCGGTT', 'AACCGGTT', ['AACCGGTA']), 0);
  assert.strictEqual(minMutation('AAAA', 'CCCC', []), -1);

  console.log('All tests passed');
}

try {
  runTests();
} catch (err) {
  console.error('Test failed:', err && err.message ? err.message : err);
  process.exit(1);
}
