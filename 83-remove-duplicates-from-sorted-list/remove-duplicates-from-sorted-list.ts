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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let answer = head

    while (answer && answer.next) {
        if (answer.val < answer.next.val) {
            answer = answer.next
        } else {
            answer.next = answer.next.next
        }
    }
    return head
};