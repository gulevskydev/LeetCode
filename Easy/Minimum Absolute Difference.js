/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  let min = Infinity;
  const res = [];
  const sorted = arr.slice().sort((a, b) => a - b);
  for (let i = 1; i < sorted.length; i++) {
    const diff = sorted[i] - sorted[i - 1];
    min = Math.min(diff, min);
  }
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] - sorted[i - 1] === min) res.push([sorted[i - 1], sorted[i]]);
  }
  return res;
};
