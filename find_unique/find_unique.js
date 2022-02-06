function findUniq(arr) {
  if (arr[0] !== arr[1]) return arr[0] === arr[2] ? arr[1] : arr[0];

  const nonUniqueValue = arr[0];
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] !== nonUniqueValue) return arr[i];
  }

  return null;
}

module.exports = findUniq;
