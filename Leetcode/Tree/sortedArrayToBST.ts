// not finished yet
// 108. Convert Sorted Array to Binary Search Tree

/** Definition for a binary tree node. */
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
  const middleIndex: number = Math.round(nums.length / 2) - 1;
  const headNode: TreeNode = new TreeNode(nums[middleIndex], null, null);
  let leftNode = new TreeNode(nums[middleIndex + 1], null, null);
  let rightNode = new TreeNode(nums[middleIndex - 1], null, null);

  headNode.left = leftNode;
  headNode.right = rightNode;

  for (let i = middleIndex - 2; i >= 0; i--) {
    leftNode.left = new TreeNode(nums[i], null, null);
    leftNode = leftNode.left;
  }

  for (let i = nums.length; i > middleIndex + 2; i--) {
    rightNode.left = new TreeNode(nums[i], null, null);
    rightNode = rightNode.left;
  }

  return headNode;
}

const input: number[] = [-10, -3, 0, 5, 9];
const output = sortedArrayToBST(input);

console.log(JSON.stringify(output));
