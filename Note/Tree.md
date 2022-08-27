# Lowest common ancestor (LCA)

**最低共同祖先**

## Wikipedia

“The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

# Depth-First Search(DFS，深度優先搜尋)

簡單來說就是遍歷整個 Tree 從 current Node 開始 current-left-right

> 「先遇到的 node 就先 Visiting」，因此，每一組「Current-left-right」必定是 CurrentNode 先 Visiting，接著是 leftchild，最後才是 rightchild。 [Reference](https://alrightchiu.github.io/SecondRound/graph-depth-first-searchdfsshen-du-you-xian-sou-xun.html)

# BST, Binary Search Tree

BST 的四條定義：

1. 以左邊節點 ( left node ) 作為根的子樹 ( sub-tree ) 的所有值都小於根節點 ( root )
2. 以右邊節點 ( right node ) 作為根的子樹 ( sub-tree ) 的所有值都大於根節點 ( root )
3. 任意節點 ( node ) 的左、右子樹也分別符合 BST 的定義
4. 不存在任何鍵值 ( key/value ) 相等的節點。

[Reference](https://medium.com/@Kadai/%E8%B3%87%E6%96%99%E7%B5%90%E6%A7%8B%E5%A4%A7%E4%BE%BF%E7%95%B6-binary-search-tree-3c40be3204e)
