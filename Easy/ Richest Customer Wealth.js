/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let max = 0;
  accounts.forEach((bank) => {
    const sum = bank.reduce((a, b) => a + b);
    max = Math.max(sum, max);
  });
  return max;
};
