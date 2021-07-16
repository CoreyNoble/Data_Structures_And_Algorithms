/**
 * Definition for a binary tree node.
 * const TreeNode = (val, left, right) => {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Initialises the conversion of a sorted array into a balanced binary search tree.
 * @param {number[]} nums
 * @return {TreeNode}
 */
 const sortedArrayToBST = nums => {
  // No values inside of the array, return nothing
  if (nums.length === 0) return null
  
  /* Return the result from the constructTreeFromArray recursive helper method.
     We initialise this recursive method by sending:
      - The array: nums
      - left: 0 (lowest bound)
      - right: nums.length-1 (highest bound)
      --- 0 and .length-1 account for the 0 based incicies
  */
  return constructTreeFromArray(nums, 0, nums.length-1)
}

/**
* Converts an array into a binary tree
* @param {array} nums // the full array to be converted into a BST
* @param {int} left   // the left bound
* @param {int} right  // the right bound
* @return {TreeNode} // { val: int, left: int, right: int }
*/
const constructTreeFromArray = (nums, left, right) => {
  // Exit if the left and right bounds overlap
  if (left > right) return null
  
  // Find the middle value between the left and right bounds, accounting for integer overflow.
  const midpoint = Math.floor(left + (right - left) / 2)
  
  // Create the TreeNode, and recursively create the .left and .right nodes
  const node = {
      // the value of the node is the midpoint between left and right.
      val: nums[midpoint],
      /* Recurse to create the left nodes in the tree, the left bound remains the same,
         while the right bound is the midpoint-1 */
      left: constructTreeFromArray(nums, left, midpoint-1),
      /* Recurse to create the right nodes in the tree, the right bound remains the same,
         while the left bound is the midpoint+1 */
      right: constructTreeFromArray(nums, midpoint+1, right),
  }
     
  // Return the binary tree
  return node
}