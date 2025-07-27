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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    let node = head;

    let reverse = new ListNode()

    let size = 0;
    while (node) {
        size ++;
        if (left <= size && size <= right) {
            reverse = new ListNode(node.val, reverse)
        }
        node = node.next
    }

    let answer = head;
    let index = 1;

    while (answer) {
        if (left <= index && index <= right) {
            answer.val = reverse.val
            reverse = reverse.next
        }
        index ++;
        answer = answer.next
    }
    return head;
};