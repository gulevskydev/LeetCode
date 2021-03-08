/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let len = 0;
  let node = head;
  while (node) {
    len++;
    node = node.next;
  }
  let mid = Math.floor(len / 2);
  while (mid--) {
    head = head.next;
  }
  return head;
};
