/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Finds every mode value within a tree.
 * @param {TreeNode} root
 * @return {number[]}
 */
 const findMode = (root) => {
  // Edge case: Root doesn't exist, no modes exist.
  if (!root) return []

  // Stores each item as a key, with a counter as its value.
  const values = {}
  // Keeps track of the highest number of identical items.
  let mostValues = 0
  // Stores the modes that will be returned.
  const modes = []
  
  // Recursive function to traverse child nodes.
  const recurseTree = (node) => {
      // Value has not yet been stored within the dictionary
      if (!values[node.val]) {
          // Initialise the value in the dictionary to 1.
          values[node.val] = 1
      // Value does exist in the dictionary
      } else {
          // Increase the counter of the value within the dictionary by 1.
          values[node.val] = values[node.val] + 1
      }
      
      /* Maintain the new highest number of occurences by comparing
         the dictionary value against the current highest value. */
      mostValues = Math.max(values[node.val], mostValues)
      
      // Recurse left and right down the tree.
      if (node.left) recurseTree(node.left)
      if (node.right) recurseTree(node.right)
  }
  
  /* Initialise the O(n) recursive tree traversal function, 
     starting with the root node. */
  recurseTree(root);
  
  // O(n) loop over every value within the dictionary.
  for (var key in values) {
      // If the value for the item matches the highest value.
      if (values[key] === mostValues) {
          // Push the item into the modes array.
          modes.push(key)
      }
  }
  
  // Return all of the modes.
  return modes
};