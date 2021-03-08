/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let s = '';
  while (head) {
    s += head.val;
    head = head.next;
  }
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] != s[s.length - 1 - i]) return false;
  }
  return true;
};
