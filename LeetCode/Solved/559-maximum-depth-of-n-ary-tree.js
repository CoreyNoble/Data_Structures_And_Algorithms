/**
 * // Definition for a Node.
 * const Node = (val, children) => {
 *    this.val = val
 *    this.children = children
 * }
 */

/**
 * Find and return the maximum depth of an N-ary tree.
 * Breadth first search approach. Traverse the tree level by level.
 * The lowest level is the maximum depth of the tree.
 * @param {Node|null} root // the root node of the tree.
 * @return {number} // the maximum depth of the tree.
 */
// const maxDepth = root => {
//     // Depth is 0 if the root node doesn't exist.
//     if (!root) return 0
    
//     // The variable that keeps track of the deepest level we've traversed to.
//     let levels = 0
    
//     /* We push all values on each level of the tree into an array (queue). 
//        Start with root, it is the only node on the first level. */
//     let queue = [root]
    
//     // Iterate while the queue has a level of data within it
//     while (queue.length) {
//         // Each item in the queue is one node within the same level, the size is the amount of items on that level.
//         const size = queue.length
        
//         // For each item within the queue
//         for (let i = 0; i < size; i++) {
//             // Remove the first node from the queue, set it as the currentNode variable.
//             let currentNode = queue.shift()
            
//             // Push the children of the current Node onto the end of the queue.
//             queue.push(...currentNode.children)
//         }
        
//         // We've iterated through another level of the tree, increase the levels counter.
//         levels++
//     }
    
//     // The queue no longer contains any levels to traverse, return the depth of the tree.
//     return levels
// }



// ~~~ //



/**
 * // Definition for a Node.
 * const Node = (val, children) => {
 *    this.val = val
 *    this.children = children
 * }
 */

/**
 * Find and return the maximum depth of an N-ary tree.
 * Depth first seaarch approach. Traverse the tree node by node.
 * The deepest leaf node is the maximum depth of the tree.
 * @param {Node|null} root // the root node of the tree
 * @return {number} // the maximum depth of the tree
 */
 const maxDepth = root => {
  // Depth is 0 if the root node doesn't exist.
  if (!root) return 0
  
  // The variable that keeps track of the deepest node we've traversed to.
  let max = 0
  
  /* Recursively traverse a node in a tree to re-calculate the max depth.
   * @param {Node} node // The current node
   * @param {number} depth // The current depth of the node
   */
  const traverse = (node, depth) => {
      // The previous iteration was the leaf node, nothing more to set or keep track of. Exit the recursive method.
      if (!node) return
      
      // Set the new 'max' value if depth is larger, otherwise, maintain 'max'.
      max = Math.max(max, depth)
      
      // For each child of the current node.
      for (let i = 0; i < node.children.length; i++) {
          // Recurse through this method again, and increase the current depth counter by 1.
          traverse(node.children[i], depth + 1)
      }
  }
  
  // Begin our recursive method call, pass in our root node and initialise the depth to 1.
  traverse(root, 1)
  
  // We have now found the length of the deepest node, return the value.
  return max
}