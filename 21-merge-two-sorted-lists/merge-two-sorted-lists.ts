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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const mergeList = list1 || list2 ? new ListNode() : null
    let tmp = mergeList
    
    while (list1 || list2) {
        console.log(list1, list2)
        if (list1 && (!list2 || list1.val < list2.val)) {
            console.log("list1", list1)
            const value = list1.val
            list1 = list1.next
            tmp.val = value
        } else {
            console.log("list2", list2)
            const value = list2.val
            list2 = list2.next
            tmp.val = value
        }
        if (list1 || list2) {
            tmp.next = new ListNode()
            tmp = tmp.next
        }
    }

    return mergeList
};