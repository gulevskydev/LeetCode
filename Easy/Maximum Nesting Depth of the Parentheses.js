/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let count = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push('(');
    else if (s[i] === ')') {
      if (stack.length > count) count = stack.length;
      stack.pop();
    }
  }
  return count;
};
