/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Reverses the pointers in a singly linked list.
 * For example: [1] > [2] > [3] becomes [3] > [2] > [1]
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    // What we change .next the pointer to.
    let prev = null
    // What we change .next the pointer from.
    let curr = head
    // Moves down the list to keep track of position.
    let next = null
    
    // Iterate until we reach the end of the linked list.
    while (curr !== null) {
        // Move next pointer down the list.
        next = curr.next
        // Set current pointer to the node before it.
        curr.next = prev
        // Shift previous and current down to the next nodes in the list.
        prev = curr
        curr = next
    }
    
    // Reached the end of the linked list, set head to the new top node.
    head = prev
    
    return head
};

/* An example of how this all works on [1] > [2] > [3]:
    
    Step 1:      |  Step 2:      |  Step 3:      |  Step 4:      |   Step 5:     |  Step 6:
                 |               |               |               |               |
    null (prev)  |  null (prev)  |  null         |  null         |  null         |  null
                 |   ↑           |   ↑           |   ↑           |   ↑           |   ↑
    [1]  (cur)   |  [1]  (curr)  |  [1]  (prev)  |  [1]  (prev)  |  [1]          |  [1]
    ↓            |               |               |   ↑           |   ↑           |   ↑
    [2]  (next)  |  [2]  (next)  |  [2]  (curr)  |  [2]  (curr)  |  [2]  (prev)  |  [2]
    ↓            |   ↓           |   ↓           |               |               |   ↑
    [3]          |  [3]          |  [3]  (next)  |  [3]  (next)  |  [3]  (curr)  |  [3] (head)
    ↓            |   ↓           |   ↓           |   ↓           |   ↓           |
    null         |  null         |  null         |  null         |  null (next)  |
    
*/