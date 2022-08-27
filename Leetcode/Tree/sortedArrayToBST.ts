import { TreeNode } from "./TreeNode";

// 108. Convert Sorted Array to Binary Search Tree

// function sortedArrayToBST(nums: number[]): TreeNode | null {
//   const middleIndex: number = Math.floor(nums.length / 2);
//   const headNode: TreeNode = new TreeNode(nums[middleIndex], null, null);
//   console.log(`middleIndex: ${middleIndex}`);
//   let leftNode =
//     middleIndex - 1 >= 0
//       ? new TreeNode(nums[middleIndex - 1], null, null)
//       : null;
//   let rightNode =
//     nums.length - 1 !== middleIndex
//       ? new TreeNode(nums[nums.length - 1], null, null)
//       : null;

//   headNode.left = leftNode;
//   headNode.right = rightNode;

//   if (leftNode) {
//     for (let i = middleIndex - 2; i >= 0; i--) {
//       leftNode.left = new TreeNode(nums[i], null, null);
//       leftNode = leftNode.left;
//     }
//   }

//   if (rightNode) {
//     for (let i = nums.length - 2; i > middleIndex; i--) {
//       rightNode.left = new TreeNode(nums[i], null, null);
//       rightNode = rightNode.left;
//     }
//   }

//   return headNode;
// }

// [-10, -3, 0, 5, 9]

const convertHelper = (
  nums: number[],
  start: number,
  end: number
): TreeNode | null => {
  if (start > end) return null;
  let middle = Math.floor((start + end) / 2);

  const root = new TreeNode(nums[middle]);
  root.left = convertHelper(nums, start, middle - 1);
  root.right = convertHelper(nums, middle + 1, end);

  return root;
};

const sortedArrayToBST = (nums: number[]): TreeNode | null => {
  let start = 0;
  let end = nums.length - 1;

  return convertHelper(nums, start, end);
};

const input: number[] = [-10, -3, 0, 5, 9];
// const input: number[] = [1, 3];
const output = sortedArrayToBST(input);

console.log(JSON.stringify(output));
