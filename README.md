# Data Structures
- Array                     - Trees
- Stacks                    - Tries
- Queues                    - Graphs
- Linked Lists              - Hash Tables

# Algorithm
- Sorting
- Dynamic Programming
- BFS + DFS (Searching)
- Recursion

===

# Data Structures

## Hash Table

## Linked List
Each node contain value and pointer, the pointer is information about the next node.
Doubly Linked List has two pointer about previous and next node.
A pointer is simply a reference to something else in memory.

- Singly Linked List
- Doubly Linked List

## Stack
LIFO => last in first out
像盤子一樣往上疊

## Queue
FIFO => first in first out

## Trees

- Binary Search Tree
    - Balanced BST
        - AVL Tree
        - Red Black Tree
- Heap
    no order from left to right. The parent is always greater then children.
    It's fast to find max and min.
    - Priority Queue
- Trie
    字典樹，屬於 Tree 的衍生資料結構
    Trie 可以當成是專門儲存 Strings 的可行方案，尤其需要 prefix search 的情況特別適合。

## Graph

Node(Vertex) connected with Edge

- Directed 
- Undirected

- Weighted 
- Unweighted

- Cyclic
- Acyclic

### Directed Acyclic Graph (DAG)

### three ways to create graph

- Edge List
- Adjacent List
- Adjacent Matrix

===

# Algorithm

## Sort
- Bubble Sort
- Insertion Sort
- Selection Sort
- Merge Sort
- Quick Sort

## Searching / Traversal

- Linear Search
- Binary Search
- Depth First Search (DFS)
    - search one branch of the tree down as many levels as possible until the target node is found or the end is reach 
- Breadth First Search (BFS)
    - go through each level of nodes from left to right