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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  const stack = [];
  function dfs(node) {
    if (node.left) dfs(node.left);
    stack.push(node.val);
    if (node.right) dfs(node.right);
  }
  dfs(root);
  let ans = new TreeNode(stack[0]);
  let cur = ans;
  for (let i = 1; i < stack.length; i++) {
    cur.left = null;
    cur.right = new TreeNode(stack[i]);
    cur = cur.right;
  }
  return ans;
};
