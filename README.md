# Data Structures

| Linear Structures | Non-Linear Structures |
|-------------------|------------------------|
| Array             | Trees                  |
| Stacks            | Tries                  |
| Queues            | Graphs                 |
| Linked Lists      | Hash Tables            |

---

### Linked List

Each node contains a value and a pointer (reference) to the next node in memory.

- **Singly Linked List**: points only to the next node  
- **Doubly Linked List**: points to both previous and next nodes  
- A pointer is simply a reference to another memory location.

---

### Stack

- **LIFO**: Last In, First Out  
- Think of a stack of plates: new ones go on top, and you remove from the top.

---

### Queue

- **FIFO**: First In, First Out  
- Like people lining up — first person in line is served first.

---

### Hash Table

A key-value data structure with fast lookup, insertion, and deletion.

---

### Trees

#### Binary Search Tree (BST)

A tree structure where:
- Left child < parent < right child

##### Balanced BST
- AVL Tree
- Red-Black Tree

#### Heap

- A complete binary tree where the parent is always greater (Max Heap) or smaller (Min Heap) than its children.
- Efficient for finding max or min values.
  - **Priority Queue** is often implemented with heaps.

#### Trie (Prefix Tree)

- Specialized tree structure optimized for string storage and prefix search.
- Ideal for autocomplete or dictionary applications.

---

### Graph

A set of nodes (vertices) connected by edges.

#### Graph Types

- **Directed** / **Undirected**
- **Weighted** / **Unweighted**
- **Cyclic** / **Acyclic**

##### DAG (Directed Acyclic Graph)

A directed graph with no cycles — often used in scheduling and dependency resolution.

#### Graph Representations

- **Edge List**
- **Adjacency List**
- **Adjacency Matrix**


# Algorithms

| Algorithm Type             |
|----------------------------|
| **Sorting**                |
| **Dynamic Programming**    |
| **Searching & Traversal**  |
| - BFS (Breadth-First Search) |
| - DFS (Depth-First Search)  |
| **Recursion**              |


### Sorting Algorithms

- Bubble Sort
- Insertion Sort
- Selection Sort
- Merge Sort
- Quick Sort

### Searching Algorithms

- Linear Search
- Binary Search

### Graph Traversal

#### Depth-First Search (DFS)
- Explores as far as possible along each branch before backtracking
- Uses less memory
- Good for: *Path Existence*
- Can be slow on wide graphs

#### Breadth-First Search (BFS)
- Explores all neighbors at the present depth prior to moving on
- Uses more memory
- Good for: *Shortest Path*, *Closer Nodes First*
