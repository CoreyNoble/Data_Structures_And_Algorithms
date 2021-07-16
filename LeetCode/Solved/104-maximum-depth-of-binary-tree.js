/**
 * Definition for a binary tree node.
 * const TreeNode = (val, left, right) => {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Find the maximum depth to a leaf node in a binary tree.
 * @param {TreeNode} root
 * @return {number}
 */
 const maxDepth = root => {
    // Edge case: No root node.
    if (!root) return 0
    
    /* Recursively call this method on the .left and .right nodes, incrementing by one each time.
       Return the maximum value when comparing the recursive result of .left and .right */
    return Math.max(1 + maxDepth(root.left),
                    1 + maxDepth(root.right))  
}