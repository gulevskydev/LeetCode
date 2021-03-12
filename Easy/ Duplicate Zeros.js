/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  const res = [];
  let i = 0;
  const len = arr.length;
  while (res.length < len) {
    if (arr[i] === 0) {
      res.push(0, 0);
      arr.pop();
    } else {
      res.push(arr[i]);
    }
    i++;
  }
  for (let i = 0; i < len; i++) {
    arr[i] = res[i];
  }
};
