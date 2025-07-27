/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head: ListNode | null): ListNode | null {
    let mid = head;
    let start = head;
    let count = 0;
    while (start) {
        if (count % 2) {
            mid = mid.next
        }
        start = start.next
        count ++
    }

    return mid
};