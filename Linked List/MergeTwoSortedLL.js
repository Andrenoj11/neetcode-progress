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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const dummy = new ListNode(0);
  let tail = dummy;

  let p1 = list1;
  let p2 = list2;

  while (p1 !== null && p2 !== null) {
    if (p1.val <= p2.val) {
      tail.next = p1;      // sambungkan node p1 ke hasil
      p1 = p1.next;        // majuin p1
    } else {
      tail.next = p2;      // sambungkan node p2 ke hasil
      p2 = p2.next;        // majuin p2
    }
    tail = tail.next;      // tail maju ke node terakhir hasil
  }

  // salah satu masih punya sisa, tempel semua sisanya
  tail.next = (p1 !== null) ? p1 : p2;

  return dummy.next;       // head hasil ada setelah dummy
    }
}
