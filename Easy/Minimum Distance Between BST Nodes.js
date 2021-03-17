/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function (root) {
  let min = Infinity;
  const prev = [Infinity];
  bst(root);
  function bst(root) {
    if (!root) return;
    min = Math.min(min, Math.min(...prev.map((e) => Math.abs(e - root.val))));
    prev.push(root.val);
    bst(root.left);
    bst(root.right);
  }
  return min;
};
