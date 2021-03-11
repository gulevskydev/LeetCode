/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  for (let i = 0; i < tokens.length; i++) {
    const cur = tokens[i];
    if ('+-/*'.includes(cur)) {
      let resOfExpression = eval(`${tokens[i - 2]} ${cur} ${tokens[i - 1]}`);
      resOfExpression =
        resOfExpression < 0
          ? Math.ceil(resOfExpression)
          : Math.floor(resOfExpression);
      tokens.splice(i - 2, 3, resOfExpression);
      i -= 2;
    }
  }
  return tokens;
};
