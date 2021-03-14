/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const map = {};
  const unique = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = ++map[arr[i]] || 1;
  }
  for (let key in map) {
    if (unique[map[key]]) return false;
    unique[map[key]] = 1;
  }
  return true;
};
