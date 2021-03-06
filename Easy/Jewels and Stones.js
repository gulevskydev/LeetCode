/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  return stones.split('').filter((e) => jewels.includes(e)).length;
};
