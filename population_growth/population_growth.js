function nbYear(p0, percent, aug, p) {
  let yearCount = 0;
  let currentPopulation = p0;

  while (currentPopulation < p) {
    currentPopulation = currentPopulation * (1 + percent / 100) + aug;
    yearCount += 1;
  }

  return yearCount;
}

module.exports = nbYear;
