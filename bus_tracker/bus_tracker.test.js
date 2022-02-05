const busTracker = require('./bus_tracker');

test('busTracker([[10,0],[3,5],[5,8]]) ==> 5', () => {
  expect(
    busTracker([
      [10, 0],
      [3, 5],
      [5, 8],
    ])
  ).toBe(5);
});
