/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  const list = new ListNode();
  let n = list;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      n.next = l2;
      n = n.next;
      l2 = l2.next;
    } else {
      n.next = l1;
      n = n.next;
      l1 = l1.next;
    }
  }
  if (l1) n.next = l1;
  if (l2) n.next = l2;
  return list.next;
};
