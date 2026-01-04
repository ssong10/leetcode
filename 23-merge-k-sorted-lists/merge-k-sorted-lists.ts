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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    return lists.reduce((cur, next) => mergeList(cur, next), null)
};

function mergeList(list1: ListNode | null, list2: ListNode | null) {
    if (!list1) return list2
    if (!list2) return list1
    let node = new ListNode();
    let cur = node
    while (list1 && list2) {
        if (list1.val < list2.val) {
            node.next = list1
            list1 = list1.next 
        } else {
            node.next = list2
            list2 = list2.next
        }
        node = node.next
    }

    node.next = list1 ?? list2
    return cur.next
}