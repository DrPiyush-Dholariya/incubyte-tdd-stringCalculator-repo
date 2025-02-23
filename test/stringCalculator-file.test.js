const add = require('../src/stringCalculator-file');

test('returns 0 for an empty string', () => {
  expect(add('')).toBe(0);
});

test('returns number for a single element in the string', () => {
  expect(add('1')).toBe(1);
});
