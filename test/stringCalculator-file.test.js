const add = require('../src/stringCalculator-file');

test('returns 0 for an empty string', () => {
  expect(add("")).toBe(0);
});