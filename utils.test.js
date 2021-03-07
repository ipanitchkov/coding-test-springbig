const { getAnagramKey, findAnagrams } = require('./utils');

test('getAnagramKey', () => {
  expect(getAnagramKey('Anagram')).toBe('Aaagmnr');
});

test('findAnagrams with no words and no toLowerCase flag', () => {
  expect(findAnagrams(undefined)).toEqual([]);
});

test('findAnagrams with no words', () => {
  expect(findAnagrams(undefined, true)).toEqual([]);
});

test('findAnagrams for v1', () => {
  expect(findAnagrams('ate,bar,loop,Pool,TEA,pet,BAR', true)).toEqual(
    expect.arrayContaining([
      ['ate', 'tea'],
      ['loop', 'pool'],
      ['bar', 'bar'],
      ['pet'],
    ])
  );
});

test('findAnagrams for v2', () => {
  expect(findAnagrams('pot,Top,opt,owl,Low,owL', false)).toEqual(
    expect.arrayContaining([['pot', 'opt'], ['Top'], ['owl'], ['Low', 'owL']])
  );
});
