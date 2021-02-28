/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let idx = 0;
  for (let i = 0; i < items.length; i++) {
    if (
      ('type' === ruleKey && items[i][0] === ruleValue) ||
      ('color' === ruleKey && items[i][1] === ruleValue) ||
      ('name' === ruleKey && items[i][2]) === ruleValue
    ) {
      idx += 1;
    }
  }
  return idx;
};
