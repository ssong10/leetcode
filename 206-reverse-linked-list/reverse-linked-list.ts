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

function reverseList(head: ListNode | null): ListNode | null {
    let tmp = head
    let answer = null
    while (tmp) {
        if (tmp.val !== null) {
            answer = new ListNode(tmp.val, answer)
        }
        tmp = tmp.next
    }
    return answer
};