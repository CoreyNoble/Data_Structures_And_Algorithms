/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Checks if a binary tree is symmetric
 * For example:  1                 1
 *              / \               / \
 *     (TRUE)  2   2    (FALSE)  2   2
 *            / \ / \           / \ / \
 *           3  4 4  3         3  4 3  4
 * @param {TreeNode} root
 * @return {boolean}
 */
 const isSymmetric = root => {
  // Edge Case: Root doesn't exist, or doesn't have children
  if (!root || !root.left && !root.right) return true
  
  // Recursive method that compares the tree nodes
  const checkIsSymmetric = (left, right) => {
      // One of the nodes is null.
      if (left === null || right === null) {
          /* Return the result when comparing the two nodes.
             For example: 
             - left === null, right !== null, return = false.
             - left === null, right === null, return = true. */
          return left === right
      }
      
      // Node values don't match. Tree is not symmetric.
      if (left.val !== right.val) return false
      
      /* Recurse, checking the mirror of left/right.
         The mirror of left.left is right.right.
         The mirror of left.right is right.left. */
      return checkIsSymmetric(left.left, right.right) &&
             checkIsSymmetric(left.right, right.left)
  }
  
  /* Initialise the recursive method with root.left and root.right.
     Return the result. */
  return checkIsSymmetric(root.left, root.right)
}