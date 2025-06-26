class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let currentNode = this.root;
    const newNode = new Node(value);

    if (this.root === null) {
        this.root = newNode;
        return;
    }

    while (currentNode !== null && currentNode.value !== value) {
        if (value > currentNode.value) {
            if (currentNode.right === null) {
                currentNode.right = newNode;
            } else {
                currentNode = currentNode.right;
            }
        } else if (value < currentNode.value) {
            if (currentNode.left === null) {
                currentNode.left = newNode;
            } else {
                currentNode = currentNode.left;
            }
        } 
    }

    this.currentNode = newNode;
  }

  lookup(value) {
    let currentNode = this.root;
    
    while (currentNode !== null && currentNode.value !== value) {
        if (value > currentNode.value) {
            currentNode = currentNode.right;
        } else if (value < currentNode.value) {
            currentNode = currentNode.left;
        }
    }

    return currentNode;
  }

  remove(value) {
    let parentNode = null;
    let currentNode = this.root;

    while (currentNode !== null && currentNode.value !== value) {
        parentNode = currentNode;
        if (value > currentNode.value) {
            currentNode = currentNode.right;
        } else if (value < currentNode.value) {
            currentNode = currentNode.left;
        }
    }

    if (currentNode === null) return;

    if (value < parentNode.value) {
        parentNode.left = currentNode.right;
        currentNode.right.left = currentNode.left;
    } else if (value > parentNode.value) {
        if (currentNode.right === null) {
            parentNode.right = currentNode.left;
        } else {
            parentNode.right = currentNode.right;
            currentNode.right.left = currentNode.left;
        }
    }

    return this;
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.remove(20);
console.log(JSON.stringify(traverse(tree.root)));
JSON.stringify(traverse(tree.root));
console.log(tree.lookup(20));
//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}