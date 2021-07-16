/**
 * Definition for a binary tree node.
 * const TreeNode = (val, left, right) => {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Determines if two binary trees are identical.
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

 const isSameTree = (p, q) => {
    // Both nodes are empty. Trees match.
    if (!p && !q) {
        return true 
    // One node is present, the other node isn't. Trees don't match.
    } else if (!p || !q) {
        return false
    // Values don't match. Trees don't match.
    } else if (p.val !== q.val) {
       return false 
    // No case is met.
    } else {
        // Recurse down both sides of the tree.
        return isSameTree(p.left, q.left) && 
               isSameTree(p.right, q.right)
    }
}