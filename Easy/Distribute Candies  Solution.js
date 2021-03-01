/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  const l = Math.floor(candyType.length / 2);
  return [...new Set(candyType)].slice(0, l).length;
};
