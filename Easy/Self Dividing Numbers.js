/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  const res = [];
  while (left <= right) {
    const num = left;
    if (
      String(left)
        .split('')
        .every((e) => num % e === 0)
    )
      res.push(num);
    left++;
  }
  return res;
};
