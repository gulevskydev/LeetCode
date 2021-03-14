/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const a1 = arr1
    .filter((e) => arr2.includes(e))
    .sort((a, b) => arr2.indexOf(a) - arr2.indexOf(b));
  const a2 = arr1.filter((e) => !arr2.includes(e)).sort((a, b) => a - b);
  return [...a1, ...a2];
};
