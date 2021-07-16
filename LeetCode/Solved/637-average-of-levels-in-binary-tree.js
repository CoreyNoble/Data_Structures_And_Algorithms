/**
 * Definition for a binary tree node.
 * const TreeNode = (val, left, right) => {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Traverses a binary tree level by level (Breadth first search).
 * Calculates the average value on each level of the tree.
 * @param {TreeNode} root // The starting ancestor node.
 * @return {number[]} // Each value is the average for that level
 */
 const averageOfLevels = root => {
  // Root doesn't exist, return an empty array.
  if (!root) return []
  
  // Will contain the average value for each level of the tree, as an entry in the array.
  const averageForEachLevel = []
  // Using a queue data structure in-order to traverse the tree level by level. Start with root.
  let queue = [root]
  
  /* As we traverse level by level, we will be appending / removing items from the queue.
     When the queue is empty, we have traversed all levels and should stop iterating. */
  while (queue.length) {
      // Will contain the sum of each value on the current level.
      let totalForLevel = 0
      
      queue.forEach(item => {
          totalForLevel += item.val
      })
      
      // Calculate and push the average value.
      if (queue.length) {
          const averageForThisLevel = totalForLevel / queue.length

          averageForEachLevel.push(averageForThisLevel)
      }
      
      // Capture the initial size of the array, before we manipulate it when queuing the next level.
      const size = queue.length
      
      // Iterate on each item in the queue.
      for (let i = 0; i < size; i++) {
          // Remove the current node from the queue
          let currentNode = queue.shift()
          
          // Push its children (left + right) onto the queue.
          if (currentNode.left) {
              queue.push(currentNode.left)
          }
          if (currentNode.right) {
             queue.push(currentNode.right)
          }
      }
  }
  
  // Return the array containing the average value of each level within the binary tree.
  return averageForEachLevel
}