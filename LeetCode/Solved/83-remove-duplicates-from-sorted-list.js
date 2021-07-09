/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Delete all duplicates nodes in a sorted linked list,
 * such that each element appears only once.
 * @param {ListNode} head
 * @return {ListNode}
 */
 const deleteDuplicates = head => {
    // Edge case: head node doesn't exist.
    if (!head) return null
    
    // Recursive function that iterates over each node in the linked list.
    const deleteDuplicate = node => {
        // Node exists and its .next is populated.
        if (node && node.next !== null) {
            // Value is identical to the next nodes' value.
            if (node.val === node.next.val) {
                /* Delete the linked node by setting the current .next to the 
                   linked nodes' .next. */
                node.next = node.next.next
                // Recurse using the current node.
                deleteDuplicate(node)
            } else {
                // Recurse using the next node.
                deleteDuplicate(node.next)
            }
        }
    }
    
    // Initialise recursive function with the nead node.
    deleteDuplicate(head)
    
    // Recursion complete, return the updated linked list.
    return head
};