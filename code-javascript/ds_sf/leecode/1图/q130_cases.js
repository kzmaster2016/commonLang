export const cases = [
  {
    name: 'example 1',
    board: [
      ['X', 'X', 'X', 'X'],
      ['X', 'O', 'O', 'X'],
      ['X', 'X', 'O', 'X'],
      ['X', 'O', 'X', 'X'],
    ],
    expected: [
      ['X', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X'],
      ['X', 'O', 'X', 'X'],
    ],
  },
  {
    name: 'single X',
    board: [['X']],
    expected: [['X']],
  },
  {
    name: 'single O',
    board: [['O']],
    expected: [['X']],
  },
  {
    name: 'all X',
    board: [
      ['X', 'X', 'X'],
      ['X', 'X', 'X'],
      ['X', 'X', 'X'],
    ],
    expected: [
      ['X', 'X', 'X'],
      ['X', 'X', 'X'],
      ['X', 'X', 'X'],
    ],
  },
  {
    name: 'all O',
    board: [
      ['O', 'O', 'O'],
      ['O', 'O', 'O'],
      ['O', 'O', 'O'],
    ],
    expected: [
      ['X', 'X', 'X'],
      ['X', 'X', 'X'],
      ['X', 'X', 'X'],
    ],
  },
  {
    name: 'O on border only',
    board: [
      ['O', 'O', 'O'],
      ['O', 'X', 'O'],
      ['O', 'O', 'O'],
    ],
    expected: [
      ['O', 'O', 'O'],
      ['O', 'X', 'O'],
      ['O', 'O', 'O'],
    ],
  },
  {
    name: 'O in center only',
    board: [
      ['X', 'X', 'X'],
      ['X', 'O', 'X'],
      ['X', 'X', 'X'],
    ],
    expected: [
      ['X', 'X', 'X'],
      ['X', 'X', 'X'],
      ['X', 'X', 'X'],
    ],
  },
  {
    name: 'empty board',
    board: [],
    expected: [],
  },
  {
    name: 'complex case',
    board: [
      ['X', 'O', 'X', 'O', 'X'],
      ['O', 'X', 'O', 'X', 'O'],
      ['X', 'O', 'X', 'O', 'X'],
      ['O', 'X', 'O', 'X', 'O'],
      ['X', 'O', 'X', 'O', 'X'],
    ],
    expected: [
      ['X', 'O', 'X', 'O', 'X'],
      ['O', 'X', 'X', 'X', 'O'],
      ['X', 'X', 'X', 'X', 'X'],
      ['O', 'X', 'X', 'X', 'O'],
      ['X', 'O', 'X', 'O', 'X'],
    ],
  },
];