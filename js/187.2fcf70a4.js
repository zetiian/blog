(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{877:function(n,e){n.exports="### 104. Maximum Depth of Binary Tree\n\nGiven a binary tree, find its maximum depth.\n\nThe maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.\n\nNote: A leaf is a node with no children.\n\nExample:\n\nGiven binary tree [3,9,20,null,null,15,7],\n\n```js\n    3\n   / \\\n  9  20\n    /  \\\n   15   7\n\nreturn its depth = 3.\n```\n\n### Analyze\n\nWay1: recursive\n\n```js\n/**\n * Definition for a binary tree node.\n * function TreeNode(val) {\n *   this.val = val;\n *   this.left = this.right = null;\n * }\n */\n/**\n * @param {TreeNode} root\n * @return {number}\n */\nvar maxDepth = function (root) {\n  return root === null ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1\n};\n```\n\n### Sister title\n\n111"}}]);