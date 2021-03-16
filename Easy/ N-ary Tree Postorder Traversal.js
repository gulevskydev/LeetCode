/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
  const ans = [];
  bfs(root);
  function bfs(node) {
    if (!node) return;
    if (!node.children.length) {
      ans.push(node.val);
      return;
    }
    node.children.forEach((e) => bfs(e));
    ans.push(node.val);
  }
  return ans;
};
