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
var sumRootToLeaf = function (root) {
  let ans = 0;
  dfs(root);
  function dfs(node, num = '') {
    num += node.val;
    if (!node.left && !node.right) {
      ans += parseInt(num, 2);
      return;
    }
    if (node.right) dfs(node.right, num);
    if (node.left) dfs(node.left, num);
  }
  return ans;
};
