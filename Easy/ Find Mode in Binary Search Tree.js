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
 * @return {number[]}
 */
var findMode = function (root) {
  const store = {};
  bfs(root);
  function bfs(root) {
    if (!root) return;
    store[root.val] = ++store[root.val] || 1;
    bfs(root.left);
    bfs(root.right);
  }
  let max = -Infinity;
  let ans;
  for (let key in store) {
    if (store[key] > max) {
      ans = key;
      max = store[key];
    }
  }
  return [ans];
};
