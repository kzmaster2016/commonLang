import { solve } from './q130.js';
import { cases } from './q130_cases.js';

const cloneBoard = (board) => board.map((row) => row.slice());

let pass = 0;
for (const t of cases) {
  const board = cloneBoard(t.board);
  solve(board);
  const ok = JSON.stringify(board) === JSON.stringify(t.expected);
  if (ok) pass += 1;
  console.log(`${t.name}: ${ok ? 'OK' : 'FAIL'}`);
  if (!ok) {
    console.log('  Input:', JSON.stringify(t.board));
    console.log('  Expected:', JSON.stringify(t.expected));
    console.log('  Got:', JSON.stringify(board));
  }
}

console.log(`done: ${pass}/${cases.length} passed`);
