// https://desolve.medium.com/%E5%BE%9Eleetcode%E5%AD%B8%E6%BC%94%E7%AE%97%E6%B3%95-55-dfs-3-26306bc5a084
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/solution/
import { TreeNode } from "./TreeNode";

/**
 * Definition for a binary tree node.
 */
function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  // 1. p q 可能是 LCA
  // 2. 節點的左子樹有 p 或 q
  // 3. 節點的右子樹有 p 或 q

  let answer: TreeNode | null = null;

  const dfs = (
    node: TreeNode | null,
    x: TreeNode | null,
    y: TreeNode | null
  ): boolean => {
    if (!node) return false;
    const left = dfs(node.left, x, y) ? 1 : 0;
    const right = dfs(node.right, x, y) ? 1 : 0;
    const mid = node === x || node === y ? 1 : 0;

    if (left + right + mid === 2) {
      answer = node;
    }
    return left + right + mid > 0;
  };

  dfs(root, p, q);
  return answer;
}

const root = new TreeNode(1, null, null);
const leftNode = new TreeNode(2, null, null);
const rightNode = new TreeNode(2, null, null);
root.left = leftNode;
root.right = rightNode;

const result = lowestCommonAncestor(root, leftNode, rightNode);
console.log(result);

export { result };
