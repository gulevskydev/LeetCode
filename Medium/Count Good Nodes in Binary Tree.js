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
var goodNodes = function (root) {
  let ans = 0;
  dfs(root, -Infinity);
  function dfs(node, preMax) {
    if (!node) return;
    const max = Math.max(preMax, node.val);
    if (node.val >= preMax) ans++;
    if (node.left) dfs(node.left, max);
    if (node.right) dfs(node.right, max);
  }
  return ans;
};
