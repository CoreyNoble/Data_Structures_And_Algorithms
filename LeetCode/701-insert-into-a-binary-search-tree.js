/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Initialises a recursion method to insert a node into a Binary Search Tree.
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
 const insertIntoBST = function(root, val) {
  // Edge case, root is empty.
  if (root === null) {
      // Create/return a node, using the current val.
      root = { val: val, left: null, right: null }
      
      return root;
  }
  
  // Initialise the recursive method to insert the node.
  recurseBST(root, val)
  
  // Node has been inserted, return the tree.
  return root
};

/**
* A recursive method that finds where a node should be inserted into a BST, and inserts the node.
* @param {TreeNode} root
* @param {number} val
* @return {void}
*/
const recurseBST = function (node, val) {
  // Value is less than current node.
  if (val < node.val) {
      // A left node exists.
      if (node.left) {
          // Traverse left.
          recurseBST(node.left, val)
      // No left node exists.
      } else {
          // Insert a new node in the left position.
          node.left = { val: val, left: null, right: null }
      }
  // Value is greater than the current node.
  } else if (val > node.val) {
      // A right node exists.
      if (node.right) {
          // Traverse right.
          recurseBST(node.right, val)
      // No right node exists.
      } else {
          // Insert a new node in the right position.
          node.right = { val: val, left: null, right: null }
      }
  }
}