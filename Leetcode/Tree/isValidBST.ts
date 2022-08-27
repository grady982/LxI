import { TreeNode } from "./TreeNode";
/**
 * 98. Validate Binary Search Tree
 * Medium
 * 網友解答666: https://ithelp.ithome.com.tw/articles/10213279
 */

/**
 * Definition for a binary tree node.
 *  class TreeNode {
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

function isValidBST(root: TreeNode | null): boolean {
  // rule:
  // 1. root > left
  // 2. root < right
  let newRoot: TreeNode;

  // In-order Traversal：左 - 中 - 右
  const inOrder = (node: TreeNode | null) => {
    if (!node) return;
    inOrder(node.left);
    inOrder(node.right);

    return;
  };

  return false;
  // const check = (node: TreeNode): boolean => {
  //   if (!node.left && !node.right) return true;

  //   const c1 = node.left ? node.val > node.left.val && check(node.left) : true;
  //   const c2 = node.right
  //     ? node.val < node.right.val && check(node.right)
  //     : true;

  //   return c1 && c2;
  // };

  // return root ? check(root) : false;
}

//  [5,4,6,null,null,3,7]

const root = new TreeNode(2, null, null);
const leftNode = new TreeNode(1, null, null);
const rightNode = new TreeNode(3, null, null);
root.left = leftNode;
root.right = rightNode;

const result = isValidBST(root);
console.log(result);
