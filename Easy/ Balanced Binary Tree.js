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
 * @return {boolean}
 */
var isBalanced = function (root) {
  let balanced = true;

  function getHeight(tree) {
    if (!tree) return 0;
    if (!balanced) return;
    const left = getHeight(tree.left);
    const right = getHeight(tree.right);
    const diff = Math.abs(left - right);
    if (diff > 1) balanced = false;
    return Math.max(left, right) + 1;
  }
  getHeight(root);
  return balanced;
};
