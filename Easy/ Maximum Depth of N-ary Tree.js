/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0
    let count = 0
    traverse(root, 1)
    function traverse(root, depth) {
        if(!root || !root.children.length ) {
            count = Math.max(count, depth)
            return
        }
        root.children.forEach(e => traverse(e, depth+1))
    }
    return count
};