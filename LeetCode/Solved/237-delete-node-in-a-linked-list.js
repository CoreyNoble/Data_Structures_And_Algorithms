/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Deletes a given node from a singly linked list.
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 const deleteNode = node => {
    // Replace current node value with next node value.
    node.val = node.next.val
    // Set current node next to next node's next
    node.next = node.next.next

    /* The above two steps remove the current node by replacing it with the 
       next node. This is done by: 
        1. Copying the *next value into the [current] value: 
            1 -> [5] -> *9 -> 11 INTO
            1 -> [9] -> *9 -> 11

        2. Setting the [current].next to the *next.next pointer. 
           Doing this removes the only pointer to the *next node.
            1 -> [9] -> *9 -> 11 INTO
            -  1 -> [9] -> 11
            - *9 -> 11

           The *next node now has nothing pointing to it, 
           therefore it is no longer a part of the linked list. */
};