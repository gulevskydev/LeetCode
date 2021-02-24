// Solution is faster than 99.23% of JavaScript online submissions for Reverse Words in a String.
// It takes one minute to solve this problem :D
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s
    .split(' ')
    .filter((e) => e.length)
    .reverse()
    .join(' ');
};
