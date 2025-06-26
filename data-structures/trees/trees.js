// visual Tree => https://visualgo.net/en/bst

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
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(60);
tree.insert(30);
tree.insert(55);
tree.insert(1);
tree.insert(38);
tree.insert(44);

tree.remove(30);

console.log(JSON.stringify(traverse(tree.root)));
JSON.stringify(traverse(tree.root));
// console.log(tree.lookup(20));
//         60
//      30     72
//  1       55 
//      38

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}