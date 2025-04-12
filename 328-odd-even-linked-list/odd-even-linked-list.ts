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

function oddEvenList(head: ListNode | null): ListNode | null {
    let lastNode = head
    let size = 0;
    if (!lastNode) {
        return lastNode
    }
    while (lastNode.next) {
        lastNode = lastNode.next
        size ++
    }
    let tmp = head  
    for (let i=0;i<size;i++) {
        if (i % 2 === 0) {
            if (tmp && tmp.next && tmp.next.next) {
                const next = tmp.next.next
                lastNode.next = tmp.next
                lastNode = lastNode.next
                lastNode.next = null
                tmp.next = next
                continue
            }
        }
        tmp = tmp.next
    }
    
    return head
};