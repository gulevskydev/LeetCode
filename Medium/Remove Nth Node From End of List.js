/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  var cur = new ListNode(null);
  cur.next = head;
  var p1 = cur;
  var p2 = cur;
  for (var i = 0; i < n + 1; i++) p1 = p1.next;
  while (p1) {
    p2 = p2.next;
    p1 = p1.next;
  }
  p2.next = p2.next.next;
  return cur.next;
};
