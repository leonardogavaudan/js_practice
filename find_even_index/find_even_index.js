function findEvenIndex(arr) {
  const total = arr.reduce((a, b) => a + b, 0);
  let leftSideTotal = 0;

  for (let i = 0; i < arr.length; i++) {
    if (leftSideTotal === total - leftSideTotal - arr[i]) return i;
    leftSideTotal += arr[i];
  }

  return -1;
}

module.exports = findEvenIndex;
