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

function deleteMiddle(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return null
    }
    let current = head;
    let n = 0
    while (current) {
        current = current.next
        n ++
    }

    let index =0;
    let tmp = head;
    while (index < ((n- n%2)/2)  - 1) {
        tmp = tmp.next
        index++;
    }

    tmp.next = tmp.next.next
    
    return head
};