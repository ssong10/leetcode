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

function pairSum(head: ListNode | null): number {
    let reverse = null
    let tmp = head

    while (tmp) {
        if (reverse) {
            reverse.next = new ListNode(reverse.val, reverse.next)
            reverse.val = tmp.val
        } else {
            reverse = new ListNode(tmp.val)
        }
        tmp = tmp.next
    }
    
    let sum = 0
    while (head) {
        if (head.val + reverse.val > sum) {
            sum = head.val + reverse.val
        } 
        head = head.next
        reverse = reverse.next
    }
    return sum
};