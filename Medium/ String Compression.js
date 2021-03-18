/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let n = chars.length;
  let count = 1;

  for (let i = n - 2; i >= -1; i--) {
    if (chars[i] === chars[i + 1]) {
      count++;
    } else if (count > 1) {
      chars.splice(i + 1, count, chars[i + 1], ...String(count));
      count = 1;
    }
  }
  return chars.length;
};
