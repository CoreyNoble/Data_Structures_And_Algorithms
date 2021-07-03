/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Returns all of the paths within a binary tree.
 * @param {TreeNode} root
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
  // Store an array of paths.
  let paths = []

  // Edge Case: No root, return the empty paths array.
  if (!root) return paths

  /**
   * Recurses through the binary tree with Depth First Search.
   * Appends to the current path string and pushes onto the paths array when there are no more child nodes.
   * @param {TreeNode} node
   * @return {void}
   */
  findTreePaths = (node, current_path) => {
      // Convert node value to a string.
      const value = `${node.val}`

      // Append to the current path.
      if (current_path === '') {
          current_path = value
      } else {
          current_path += `->${value}`
      }
      
      // No more children. Push to the paths array and return.
      if (!node.left && !node.right) return paths.push(current_path)
      // Recurse left.
      if (node.left) findTreePaths(node.left, current_path)
      // Recurse right.
      if (node.right) findTreePaths(node.right, current_path) 
  }
  
  // Initialise recursive method.
  findTreePaths(root, '')
  
  // Recursion finished, return the paths array.
  return paths
};