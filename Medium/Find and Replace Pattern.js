/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  return words.filter((e) => filterByPattern(e, pattern));
};

function filterByPattern(word, pattern) {
  const used = [];
  const map = {};
  for (let i = 0; i < word.length; i++) {
    if (!map.hasOwnProperty(word[i])) {
      if (used.includes(pattern[i])) return false;
      map[word[i]] = pattern[i];
      used.push(pattern[i]);
    } else if (map[word[i]] != pattern[i]) return false;
  }
  return true;
}
