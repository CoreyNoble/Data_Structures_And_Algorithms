/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Determines if a linked list contains a cycle.
 * @param {ListNode} head
 * @return {boolean}
 */
 const hasCycle = head => {
    // Edge case: head node or head.next doesn't exist.
    if (!head || !head.next) return false
    
    // Walks through the node list slowly (one at a time).
    let slow = head
    // Walks through the node list quickly (two at a time).
    let fast = head.next
    
    // 'fast' is not pointing to 'slow'.
    while (fast !== slow) {
        // 'fast' has reached the end of the list.
        if (fast === null || fast.next === null) {
            // There is no cycle.
            return false
        }
        
        // 'slow' moves up one node.
        slow = slow.next
        // 'fast' moves up two nodes.
        fast = fast.next.next
    }
    
    // 'fast' and 'slow' are identical, there is a cycle.
    return true
    
    /* The following examples demonstrate how this works:
       
       (1) -> (2) -> (3) -> (4) -> (5) 
                      ^-------------
                      
       slow = 1, fast = 2
       slow = 2, fast = 4
       slow = 3, fast = 3 = cycle exists 


       (1) -> (2) -> (3) -> (4) -> (5)
       
       slow = 1, fast = 2
       slow = 2, fast = 4
       slow = 3, fast = null = cycle DOESN'T exist */
}