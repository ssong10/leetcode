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

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    let node = root
    while (node.val !== val) {
        if (node.val > val) {
            if (node.left) {
                node = node.left
            } else {
                node = null
                break
            }
        } else {
            if (node.right) {
                node = node.right
            } else {
                node = null
                break
            }
        }
    }
    return node
};