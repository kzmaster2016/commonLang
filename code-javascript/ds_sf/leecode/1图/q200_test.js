import { numIslands } from './q200.js';
import { cases } from './q200_cases.js';

const cloneGrid = (grid) => grid.map((row) => row.slice());

let pass = 0;
for (const t of cases) {
  const actual = numIslands(cloneGrid(t.grid));
  const ok = actual === t.expected;
  if (ok) pass += 1;
  console.log(`${t.name}: ${actual} ${ok ? 'OK' : `FAIL (expected ${t.expected})`}`);
}

console.log(`done: ${pass}/${cases.length} passed`);
