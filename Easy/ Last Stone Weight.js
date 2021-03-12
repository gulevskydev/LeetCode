/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones = stones.sort((a, b) => b - a);
    stones.splice(0, 2, Math.abs(stones[0] - stones[1]));
  }
  return stones;
};
