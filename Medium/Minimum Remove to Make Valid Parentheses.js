/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  s = s.split('');
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else if (s[i] === ')') {
      if (s[stack[stack.length - 1]] === '(') stack.pop();
      else stack.push(i);
    }
  }
  stack.forEach((i) => s.splice(i, 1, ''));
  return s.join('');
};
