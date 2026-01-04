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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let cur = head
    const tmp = []
    while (cur) {
        tmp.push(cur)
        cur = cur.next
    }

    const target = tmp.length - n

    if (target) {
        tmp[target - 1].next = tmp[target + 1] ?? null
    } else {
        return head.next
    }

    return head
};