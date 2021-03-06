/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    const word = [...new Set(words[i])];
    let isEqual = true;
    for (let j = 0; j < word.length; j++) {
      if (!allowed.includes(word[j])) isEqual = false;
    }
    count += isEqual ? 1 : 0;
  }
  return count;
};
