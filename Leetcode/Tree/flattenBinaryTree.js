import { TreeNode } from "./TreeNode.js";

const root = new TreeNode(1, null, null);
const two = new TreeNode(2, null, null);
const three = new TreeNode(3, null, null);
const four = new TreeNode(4, null, null);
const five = new TreeNode(5, null, null);
const six = new TreeNode(6, null, null);
root.left = two;
root.right = five;
two.left = three;
two.right = four;
five.right = six;

// Input: root = [1,2,5,3,4,null,6]
// 1
// 2 5
// 34 null 6
// Output: [1,null,2,null,3,null,4,null,5,null,6]
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  let nextOne = null;

  const update = (node) => {
    if (!node) return node;
    console.log(`val ${node.val}`);

    update(node.right);
    update(node.left);

    node.right = nextOne;
    node.left = null;
    console.log(JSON.stringify(node));

    nextOne = node;
  };

  update(root);
};

flatten(root);
console.log(JSON.stringify(root));
