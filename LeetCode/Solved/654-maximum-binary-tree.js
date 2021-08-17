/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Constructs a maximum binary tree from an array of integers.
 * For example: [3, 2, 1, 6, 0, 5] becomes: --(6)--
 *                                         /      \
 *                                       (3)     (5)
 *                                      /  \    /  \
 *                                     () (2) (0)  ()
 *                                        / \
 *                                       () (1)
 * @param {number[]} nums
 * @return {TreeNode}
 */
const constructMaximumBinaryTree = nums => {
    /* Keeps track of the biggest node and its index.
       Initialised to the first item in the nums array. */
    const biggest = { idx: 0, val: nums[0] }
    
    // O(n) loop over every item within the nums array.
    for(let i=1; i < nums.length; i++) {
        // A new biggest value is found
        if (nums[i] > biggest.val) {
            // Save the new biggest value and its index.
            biggest.val = nums[i]
            biggest.idx = i
        }
    }
       
    // Create a new node from the biggest value found.
    const node = new TreeNode(biggest.val)
    // Create a new prefix array containing items before the biggest index in nums.
    const prefix = nums.slice(0, biggest.idx)
    // Create a new suffix array containing items after the biggest index in nums.
    const suffix = nums.slice(biggest.idx+1, nums.length)
    
    // Prefix[] contains items.
    if (prefix.length) {
        // Recursively construct the left path of the new node.
        node.left = constructMaximumBinaryTree(prefix)        
    }
    // Suffix[] contains items.
    if (suffix.length) {
        // Recursively construct the right path of the new node.
        node.right = constructMaximumBinaryTree(suffix)
    }
        
    // Recursion complete, return the Maximum Binary Tree.
    return node
}