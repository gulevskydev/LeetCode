/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  const obj = {};
  paragraph = paragraph.toLowerCase().split(/\W+/);
  for (let i = 0; i < paragraph.length; i++) {
    if (!banned.includes(paragraph[i])) {
      obj[paragraph[i]] = ++obj[paragraph[i]] || 1;
    }
  }
  return Object.entries(obj).sort((a, b) => b[1] - a[1])[0][0];
};
