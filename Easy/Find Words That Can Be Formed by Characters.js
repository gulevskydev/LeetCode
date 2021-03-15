/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  const store = {};
  let ans = 0;
  for (let i = 0; i < chars.length; i++) {
    store[chars[i]] = ++store[chars[i]] || 1;
  }
  for (let i = 0; i < words.length; i++) {
    let cur = {};
    let canFormate = true;
    for (let j = 0; j < words[i].length; j++) {
      cur[words[i][j]] = ++cur[words[i][j]] || 1;
    }
    for (let key in cur) {
      if (!store.hasOwnProperty(key)) {
        canFormate = false;
        break;
      }
      if (store[key] < cur[key]) {
        canFormate = false;
        break;
      }
    }
    if (canFormate) ans += words[i].length;
  }
  return ans;
};
