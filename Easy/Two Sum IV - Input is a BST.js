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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  const store = {};
  let ans = false;
  bfs(root) ? true : false;
  function bfs(root) {
    if (!root) return;
    if (store[k - root.val]) ans = true;
    store[root.val] = true;
    bfs(root.left);
    bfs(root.right);
  }
  return ans;
};
