/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
  /* It is assumed that this is a sorted binary tree
     The left is always either less than or equal to the root,
     The right is always either greater than or equal to the root */
  
  // BOTH P and Q are is less than the root
  if (p.val < root.val &&
      q.val < root.val
  ) {
      // Recurse left down the tree
      return lowestCommonAncestor(root.left, p, q);
  }
  
  // BOTH P and Q are greater than the root
  if (p.val > root.val &&
      q.val > root.val
  ) {
      // Recurse right down the tree
      return lowestCommonAncestor(root.right, p, q);
  }
  
  /* We have now found the common ancestor because neither P or Q are BOTH on one side of the tree.
     We get to this scenario when either:
     - P is on one side, and Q is on the other.
     - P or Q are equal to the root, or both.
     - P or Q are equal to the root, and the other is left or right. */
  return root;
};