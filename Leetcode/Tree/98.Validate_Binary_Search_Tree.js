/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {

    // 1. All nodes in left subtree < current node
    // 2. All nodes in right subtree > current node
    // 3. This rule apply recursively to all nodes

    // DFS => traverse in order
    traverseInOrder = function(node, list) {
        if (node.left) { 
            traverseInOrder(node.left, list);
        }
        list.push(node.val);

        if (node.right) {
            traverseInOrder(node.right, list);
        }

        return list;
    }

    const queue = [root];

    while (queue.length > 0) {
        const node  = queue.shift();

        if (node.left) {
            const list = traverseInOrder(node.left, []);
            const isValid = list.every((v) => v < node.val);
            if (!isValid) return false;

            queue.push(node.left);
        }

        if (node.right) {
            const list = traverseInOrder(node.right, []);
            const isValid = list.every((v) => v > node.val);
            if (!isValid) return false;

            queue.push(node.right);
        }
    }

    return true;
};