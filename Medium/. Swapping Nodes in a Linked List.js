/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  let len = 0;
  let left, right;
  let node = head;
  let cur = head;
  let n = head;
  while (node) {
    len++;
    if (len === k) left = node.val;
    node = node.next;
  }
  let curLen = 0;
  while (n) {
    curLen++;
    if (curLen === len - k + 1) right = n.val;
    n = n.next;
  }
  let lan = 0;
  while (cur) {
    lan++;
    if (lan === k) cur.val = right;
    if (lan === len - k + 1) cur.val = left;
    cur = cur.next;
  }
  return head;
};
