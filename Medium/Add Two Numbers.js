/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let root = new ListNode(0);
  let ans = root;
  let n = 0;
  while (l1 || l2) {
    let left = 0,
      right = 0;
    if (l1) {
      left = l1.val;
      l1 = l1.next;
    }
    if (l2) {
      right = l2.val;
      l2 = l2.next;
    }
    let sum = n + left + right;
    if (sum > 9) {
      n = 1;
      sum %= 10;
    } else n = 0;
    ans.next = new ListNode(sum);
    ans = ans.next;
  }
  if (n) ans.next = new ListNode(n);
  return root.next;
};
