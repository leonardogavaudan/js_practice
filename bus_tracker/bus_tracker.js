function busTracker(busStops) {
  let total = 0;

  busStops.forEach((element) => {
    total += element[0];
    total -= element[1];
  });

  return total;
}

module.exports = busTracker;
