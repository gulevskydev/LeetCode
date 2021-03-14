/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  const ans = [];
  traverse(root);
  function traverse(root) {
    if (!root) return;
    ans.push(root.val);
    if (root.children) root.children.forEach((e) => traverse(e));
  }
  return ans;
};
