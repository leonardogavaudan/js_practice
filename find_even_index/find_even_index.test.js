const findEvenIndex = require('./find_even_index');

test('findEvenIndex([1,2,3,4,3,2,1]) ==> 3', () => {
  expect(findEvenIndex([1, 2, 3, 4, 3, 2, 1])).toBe(3);
});
