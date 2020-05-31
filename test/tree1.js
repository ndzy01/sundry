/*
 * @Author: ndzy
 * @Date: 2020-02-23 15:02:17
 * @LastEditTime: 2020-02-23 15:11:17
 * @LastEditors: ndzy
 */
function Node(data) {
  this.data = data
  this.parent = null
  this.children = []
}

function Tree(data) {
  let node = new Node(data)
  this._root = node
}
Tree.prototype.traverseDF = function(callback) {
  ;(function traverse(currentNode) {
    var i, len
    var children = currentNode.children
    for (i = 0, len = children.length; i < len; i++) {
      traverse(children[i])
    }
    callback(currentNode)
  })(this._root)
}
Tree.prototype.traverseBF = function(callback) {
  var queue = [],
    i,
    len
  queue.push(this._root)
  while (queue.length) {
    var cur = queue.shift()
    callback(cur)
    for (i = 0, len = cur.children.length; i < len; i++) {
      queue.push(cur.children[i])
    }
  }
}
Tree.prototype.contains = function(callback, traversal) {
  traversal.call(this, callback)
}
// eg
// tree.contains(function(node) {
//   if (node.data === 'two') {
//     console.log(node)
//   }
// }, tree.traverseBF)

Tree.prototype.add = function(data, toData, traversal) {
  var child = new Node(data),
    parent = null,
    callback = function(node) {
      if (node.data === toData) {
        parent = node
      }
    }
  this.contains(callback, traversal)
  if (parent) {
    parent.children.push(child)
    child.parent = parent
  } else {
    throw new Error('cannot add node to an unexist parent')
  }
}
Tree.prototype.add = function(data, toData, traversal) {
  var child = new Node(data),
    parent = null,
    callback = function(node) {
      if (node.data === toData) {
        parent = node
      }
    }
  this.contains(callback, traversal)
  if (parent) {
    parent.children.push(child)
    child.parent = parent
  } else {
    throw new Error('cannot add node to an unexist parent')
  }
}
Tree.prototype.remove = function(data, fromData, traversal) {
  var tree = this,
    parent = null,
    childToRemove = null,
    i,
    len,
    children,
    index

  var callback = function(node) {
    if (node.data === fromData) {
      parent = node
    }
  }
  this.contains(callback, traversal)
  if (parent) {
    index = findIndex(parent.children, data)
    console.log(index)
    if (index === undefined) {
      throw new Error('Node to remove does not exist')
    } else {
      childToRemove = parent.children.splice(index, 1)
    }
  }
  console.log(childToRemove)
  return childToRemove
}

function findIndex(arr, data) {
  var i = 0,
    len = arr.length,
    index
  for (; i < len; i++) {
    if (arr[i].data === data) {
      index = i
    }
  }
  return index
}

var tree = new Tree('one')
console.log(tree)
console.log(tree._root)

tree._root.children.push(new Node('two'))
tree._root.children[0].parent = tree
tree._root.children.push(new Node('three'))
tree._root.children[1].parent = tree

tree._root.children[0].children.push(new Node('four'))
tree._root.children[0].children[0].parent = tree._root.children[0]
tree._root.children[0].children.push(new Node('five'))
tree._root.children[0].children[1].parent = tree._root.children[0]

tree._root.children[1].children.push(new Node('six'))
tree._root.children[1].children[0].parent = tree._root.children[1]
tree._root.children[1].children.push(new Node('serven'))
tree._root.children[1].children[1].parent = tree._root.children[1]
// tree.traverseBF(function(node) {
// 	console.log(node.data);
// });
tree.contains(function(node) {
  if (node.data === 'two') {
    console.log(node)
  }
}, tree.traverseBF)
tree.add('eight', 'four', tree.traverseBF)
var remove = tree.remove('two', 'one', tree.traverseBF)
tree.traverseBF(function(node) {
  console.log(node.data)
})
