/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  const res = [];
  for (let i = 0; i < words.length; i++) {
    const str = words.slice(0, i).concat(words.slice(i + 1));
    for (let j = 0; j < str.length; j++) {
      if (str[j].includes(words[i])) {
        res.push(words[i]);
      }
    }
  }
  return [...new Set(res)];
};
