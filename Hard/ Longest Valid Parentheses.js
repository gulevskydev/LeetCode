/**
 * @param {string} s
 * @return {number}
 */
function longestValidParentheses(s) {
  if (s.length < 2) return 0;
  const res = [];
  let count = {
    '(': 0,
    ')': 0,
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      count['(']++;
      count[')']++;
    } else {
      count[s[i]]--;
      if (count[s[i]] < 0) {
        res.push(count['('] * 2);
        count['('] = 0;
        count[s[i]] = 0;
      } else if (count[s[i]] === 0) {
        res.push(count['('] * 2);
      }
    }
  }
  count = {
    '(': 0,
    ')': 0,
  };
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ')') {
      count[')']++;
      count['(']++;
    } else {
      count['(']--;
      if (count[s[i]] < 0) {
        res.push(count[')'] * 2);
        count[')'] = 0;
        count['('] = 0;
      } else if (count[s[i]] === 0) {
        res.push(count['('] * 2);
      }
    }
  }

  return Math.max(...res);
}
