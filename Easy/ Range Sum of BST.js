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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let ans = 0;
  dfs(root);
  function dfs(root) {
    if (!root) return;
    if (root.val >= low && root.val <= high) ans += root.val;
    if (root.right) dfs(root.right);
    if (root.left) dfs(root.left);
  }
  return ans;
};
