/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let max = 0;
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      ans = i;
      max = arr[i];
    }
  }
  return ans;
};
