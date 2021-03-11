/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  const obj = new Set();
  for (let i = 0; i < arr.length; i++) {
    obj.add(arr[i]);
  }
  let count = k;
  for (let i = 1; i <= arr.length + k; i++) {
    if (!obj.has(i)) count--;
    if (count === 0) return i;
  }
};
