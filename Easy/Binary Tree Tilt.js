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
var findTilt = function (root) {
  let val = 0;
  dfs(root, val);
  function dfs(root) {
    if (!root) return 0;
    let left = dfs(root.left, val);
    let right = dfs(root.right, val);
    val += Math.abs(left - right);
    return root.val + left + right;
  }
  return val;
};
