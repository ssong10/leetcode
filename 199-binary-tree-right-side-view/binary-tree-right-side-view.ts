/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function rightSideView(root: TreeNode | null): number[] {
    let cur = root ? [root] : []
    const answer = []
    while (cur.length > 0) {
        answer.push(cur[cur.length-1].val)
        const tmp = []
        for (let node of cur) {
            if (node.left) {
                tmp.push(node.left)
            }
            if (node.right) {
                tmp.push(node.right)
            }
        }
        cur = tmp
    }
    return answer
};