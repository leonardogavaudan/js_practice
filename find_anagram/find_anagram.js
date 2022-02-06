function getCount(word) {
  const count = {};

  word.split('').forEach((element) => {
    if (count[element]) count[element] += 1;
    else count[element] = 1;
  });

  const sorted = Object.keys(count)
    .sort()
    .reduce((acc, key) => {
      acc[key] = count[key];
      return acc;
    }, {});

  return sorted;
}

function anagrams(word, words) {
  if (!words.length) return [];

  const targetCount = getCount(word);
  const arr = [];

  words.forEach((element) => {
    if (JSON.stringify(targetCount) === JSON.stringify(getCount(element)))
      arr.push(element);
  });

  return arr;
}

module.exports = anagrams;
