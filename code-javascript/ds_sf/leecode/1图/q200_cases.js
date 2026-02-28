export const cases = [
  {
    name: 'example 1',
    grid: [
      ['1', '1', '1', '1', '0'],
      ['1', '1', '0', '1', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '0', '0', '0'],
    ],
    expected: 1,
  },
  {
    name: 'example 2',
    grid: [
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '1', '0', '0'],
      ['0', '0', '0', '1', '1'],
    ],
    expected: 3,
  },
  {
    name: 'empty grid',
    grid: [],
    expected: 0,
  },
  {
    name: 'all water',
    grid: [
      ['0', '0'],
      ['0', '0'],
    ],
    expected: 0,
  },
  {
    name: 'single land',
    grid: [['1']],
    expected: 1,
  },
  {
    name: 'diagonal not connected',
    grid: [
      ['1', '0', '0'],
      ['0', '1', '0'],
      ['0', '0', '1'],
    ],
    expected: 3,
  },
  {
    name: 'single row mixed',
    grid: [['1', '0', '1', '1', '0', '1']],
    expected: 3,
  },
  {
    name: 'single column mixed',
    grid: [['1'], ['1'], ['0'], ['1'], ['0'], ['1']],
    expected: 3,
  },
  {
    name: 'all land 3x3',
    grid: [
      ['1', '1', '1'],
      ['1', '1', '1'],
      ['1', '1', '1'],
    ],
    expected: 1,
  },
  {
    name: 'ring of land',
    grid: [
      ['1', '1', '1', '1'],
      ['1', '0', '0', '1'],
      ['1', '0', '0', '1'],
      ['1', '1', '1', '1'],
    ],
    expected: 1,
  },
  {
    name: 'multiple islands with channels',
    grid: [
      ['1', '1', '0', '1', '0'],
      ['1', '0', '0', '1', '1'],
      ['0', '0', '1', '0', '0'],
      ['1', '1', '0', '0', '1'],
    ],
    expected: 5,
  },
];
