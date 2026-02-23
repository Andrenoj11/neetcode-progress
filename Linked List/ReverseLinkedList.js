/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
       let prev = null;
    let curr = head;

    while (curr !== null) {
      const next = curr.next; // simpan next
      curr.next = prev;       // balik arah pointer
      prev = curr;            // geser prev
      curr = next;            // geser curr
    }

    return prev; // prev adalah head baru
    }
}
