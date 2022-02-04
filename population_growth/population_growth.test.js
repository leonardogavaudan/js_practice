const nbYear = require('./population_growth');

test('nbYear(1500, 5, 100, 5000) ==> 15', () => {
  expect(nbYear(1500, 5, 100, 5000)).toBe(15);
});
