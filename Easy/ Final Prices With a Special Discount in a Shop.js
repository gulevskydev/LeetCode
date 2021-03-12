/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  let res = [];
  for (let i = 0; i < prices.length; i++) {
    let j = i + 1;
    while (j <= prices.length) {
      if (prices[j] <= prices[i]) break;
      else j++;
    }
    if (!prices[j]) res.push(prices[i]);
    else res.push(prices[i] - prices[j]);
  }
  return res;
};
