/*
 * @Author: ndzy
 * @Date: 2020-02-23 14:33:43
 * @LastEditTime: 2020-02-23 15:00:08
 * @LastEditors: ndzy
 */

/* 
 当树的root为null时，表示树为空，
这时直接将新添加的节点作为树的根节点。
否则，我们需要借助于私有函数insertNode()来完成节点的添加
。在insertNode()函数中，我们需要根据新添加节点的key的大小来递归查找树的左侧子节点或者右侧子节点，
因为根据我们的二叉搜索树的定义，值小的节点永远保存在左侧子节点上，值大的节点（包括值相等的情况）
永远保存在右侧子节点上。
*/
let Node = function(element) {
  this.element = element
  this.next = null
  this.prev = null
}

class DoubleLinkedList extends LinkedList {
  constructor() {
    super()
    this.tail = null
  }
}

let insertNode = function(node, newNode) {
  if (newNode.element < node.element) {
    if (node.prev === null) node.prev = newNode
    else insertNode(node.prev, newNode)
  } else {
    if (node.next === null) node.next = newNode
    else insertNode(node.next, newNode)
  }
}

// 前序遍历
let preOrderTraverseNode = function(node, callback) {
  if (node !== null) {
    callback(node.element)
    preOrderTraverseNode(node.prev, callback)
    preOrderTraverseNode(node.next, callback)
  }
}

// 中序遍历
let inOrderTraverseNode = function(node, callback) {
  if (node !== null) {
    inOrderTraverseNode(node.prev, callback)
    callback(node.element)
    inOrderTraverseNode(node.next, callback)
  }
}

// 后续遍历
let postOrderTraverseNode = function(node, callback) {
  if (node !== null) {
    postOrderTraverseNode(node.prev, callback)
    postOrderTraverseNode(node.next, callback)
    callback(node.element)
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  // 向树中插入一个节点
  insert(key) {
    let newNode = new Node(key)

    if (this.root === null) this.root = newNode
    else insertNode(this.root, newNode)
  }

  // 在树中查找一个节点
  search(key) {}

  // 通过中序遍历方式遍历树中的所有节点
  inOrderTraverse(callback) {
    inOrderTraverseNode(this.root, callback)
  }

  // 通过先序遍历方式遍历树中的所有节点
  preOrderTraverse(callback) {
    preOrderTraverseNode(this.root, callback)
  }

  // 通过后序遍历方式遍历树中的所有节点
  postOrderTraverse(callback) {
    postOrderTraverseNode(this.root, callback)
  }

  // 返回树中的最小节点
  min() {}

  // 返回树中的最大节点
  max() {}

  // 从树中移除一个节点
  remove(key) {}
}
let tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(9)
tree.insert(13)
tree.insert(20)
tree.insert(3)
tree.insert(6)
tree.insert(8)
tree.insert(10)
tree.insert(12)
tree.insert(14)
tree.insert(18)
tree.insert(25)

tree.preOrderTraverse(value => console.log(value))
