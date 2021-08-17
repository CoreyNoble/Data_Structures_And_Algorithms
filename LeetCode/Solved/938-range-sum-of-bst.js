/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Returns a sum of the node values within a tree within the given range.
 * For example: 
 *  Input: tree: [10, 5, 15, 3, 7, null, 18]. low: 7. high: 15.
 *  Output: 10 + 15 + 7 = 32
 * @param {TreeNode} root // Top level tree node.
 * @param {number} low    // Lower bound
 * @param {number} high   // Upper bound.
 * @return {number}
 */
 const rangeSumBST = (root, low, high) => {   
    /* Traverses the tree and recursively adds up the nodes within bounds.
       Passes in all method params, and initialises the sum to 0. */
    let sum = recurseBST(root, low, high, 0)
    
    // Tree explored. Sum has been calculated.
    return sum
}

/* 
 * Traverses a BST using Breadth First Search. 
 * Sums up all node values within a given range.
 * @param {TreeNode} node // The current node we're searching.
 * @param {number} low    // Lower bound.
 * @param {number} high   // Upper bound.
 * @param {number} sum    // Current node value total sum.
 * @return {number}       // The total sum.
 */
const recurseBST = (node, low, high, sum) => {
    // Node doesn't exist, return the sum.
    if (!node) return sum

    // Node is within range.
    if (node.val >= low &&
        node.val <= high
    ) {
        // Add the node value to the current sum.
        sum += node.val
    }

    // Recursively visit the left and right nodes, updating the sum.
    sum = recurseBST(node.left, low, high, sum)
    sum = recurseBST(node.right, low, high, sum)
    
    // Recursion complete for this node, bubble up the total sum.
    return sum
}