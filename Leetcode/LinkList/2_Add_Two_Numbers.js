import { ListNode } from "./ListNode.js";

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const getReverseNumber = (node) => {
    return !node.next
      ? [].concat(node.val)
      : [].concat(node.val, getReverseNumber(node.next));
  };

  let one = BigInt(getReverseNumber(l1).reverse().join(""));
  let two = BigInt(getReverseNumber(l2).reverse().join(""));
  const sum = (one + two).toLocaleString("fullwide", { useGrouping: false });
  const result = Array.from(sum).reverse();

  const nodeList = result.map((data) => new ListNode(data, null));
  nodeList.forEach((data, index) => {
    data.next = nodeList[index + 1] ? nodeList[index + 1] : null;
  });

  return nodeList[0];
};

// ==== Testcase ====

// JavaScript 最大整數 Number.MAX_SAFE_INTEGER: 9007199254740991
const one = [
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1,
];
const two = [5, 6, 4];

const generateNodeList = (dataList) => {
  const nodeList = dataList.map((data) => new ListNode(data, null));
  nodeList.forEach((data, index) => {
    data.next = nodeList[index + 1] ? nodeList[index + 1] : null;
  });

  return nodeList[0];
};

const l1 = generateNodeList(one);
const l2 = generateNodeList(two);
const result = addTwoNumbers(l1, l2);
console.log(`result: ${JSON.stringify(result)}`);
