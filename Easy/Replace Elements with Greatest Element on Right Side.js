/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.length - 1 === i) ans.push(-1);
    else {
      const max = Math.max(...arr.slice(i + 1));
      ans.push(max);
    }
  }
  return ans;
};
