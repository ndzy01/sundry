/*
 * @Author: ndzy
 * @Date: 2020-02-23 10:32:54
 * @LastEditTime: 2020-02-23 19:13:47
 * @LastEditors: ndzy
 */
let arr = [
  { id: 2, name: '部门B', parentId: 0 },
  { id: 3, name: '部门C', parentId: 1 },
  { id: 1, name: '部门A', parentId: 2 },
  { id: 4, name: '部门D', parentId: 1 },
  { id: 5, name: '部门E', parentId: 2 },
  { id: 6, name: '部门F', parentId: 3 },
  { id: 7, name: '部门G', parentId: 2 },
  { id: 8, name: '部门H', parentId: 4 },
]
const a = [
  {
    id: '1',
    time: '1天前',
    content: '1111',
    user_id: '1',
    parent_id: '0',
    username: 'ndzy02',
    headImg:
      'http://www.ndzy01.com:3850/uploads/2020-2-18-16-10-26-TIM图片20191215152632.png',
    toUsername: 'ndzy07',
    toUserHeadImg: 'http://www.ndzy01.com:3850/uploads/user.png',
  },
  {
    id: '12',
    time: '8分钟前',
    content: '12355rgghgvh',
    user_id:
      'xrz8dRmyjCBKDHGNDaWEZSyfcYYnjyQf6pKitAFBmpY4C8PtBXP2n8cHhccHSaFsC6BbiAChB7efMYFa5RbYQzAApWPRY6yHHQmi',
    parent_id: '0',
    username: 'ndzy03',
    headImg: 'http://www.ndzy01.com:3850/uploads/user.png',
    toUsername: 'ndzy01',
    toUserHeadImg:
      'http://www.ndzy01.com:3850/uploads/2020-2-20-14-16-33-TIM图片20191215152632.png',
  },
  {
    id: '2',
    time: '1天前',
    content: 'fw1',
    user_id:
      'eXcKi8XzWTYwxbQ73fSHXYB8nAmTWZDY5EEeid2NQnWYb8fedSQZS3y8eDp8RyDim6CnnWeHFfwzTKzZehznXs3YePjdexw2mee4',
    parent_id: '1',
    username: 'ndzy07',
    headImg: 'http://www.ndzy01.com:3850/uploads/user.png',
    toUsername: 'ndzy02',
    toUserHeadImg:
      'http://www.ndzy01.com:3850/uploads/2020-2-18-16-10-26-TIM图片20191215152632.png',
  },
  {
    id: '3',
    time: '23小时前',
    content: '12345',
    user_id:
      'xrz8dRmyjCBKDHGNDaWEZSyfcYYnjyQf6pKitAFBmpY4C8PtBXP2n8cHhccHSaFsC6BbiAChB7efMYFa5RbYQzAApWPRY6yHHQmi',
    parent_id: '2',
    username: 'ndzy03',
    headImg: 'http://www.ndzy01.com:3850/uploads/user.png',
    toUsername: 'ndzy07',
    toUserHeadImg: 'http://www.ndzy01.com:3850/uploads/user.png',
  },
  {
    id: '4',
    time: '23小时前',
    content: '我也12345',
    user_id:
      'kCszzxTcAdTsGEzsbTH4HxKBpJH8pdt8QPnZYtXZZkw6kij738y3jpt8sar7HXSCRWkdyKMyPfDsZhCPisDpXrdNcdQ5nAnEYzrd',
    parent_id: '2',
    username: 'ndzy03',
    headImg: 'http://www.ndzy01.com:3850/uploads/user.png',
    toUsername: 'ndzy07',
    toUserHeadImg: 'http://www.ndzy01.com:3850/uploads/user.png',
  },
  {
    id:
      'X2mfz364kGAQGBH5T2tPyQYTrah8cAsYGaXp5iHsCBXwDm2KcTSwCNdy4RsY5WMAEht87KweC2TFaZD5Hx2akGinSnPWNCEcHPyi',
    time: '12小时前',
    content: '1234ndzy',
    user_id:
      'z7sbnJi5DAwEZ2DxBPBDYwhzkk2bCP5yBF6Knt6yCakHRnA6b26QtQe5aB6ApzhJES62xfwPdnfwBztsyChztmbt7fGBnFdsHir7',
    parent_id: '2',
    username: 'ndzy01',
    headImg:
      'http://www.ndzy01.com:3850/uploads/2020-2-20-14-16-33-TIM图片20191215152632.png',
    toUsername: 'ndzy07',
    toUserHeadImg: 'http://www.ndzy01.com:3850/uploads/user.png',
  },
]
let b = [
  {
    id: '1',
    time: '1天前',
    content: '1111',
    user_id: '1',
    username: 'ndzy02',
    headImg:
      'http://www.ndzy01.com:3850/uploads/2020-2-18-16-10-26-TIM图片20191215152632.png',
    toUsername: 'ndzy07',
    toUserHeadImg: 'http://www.ndzy01.com:3850/uploads/user.png',
    list: [
      {
        id: '2',
        time: '1天前',
        content: 'fw1',
        user_id:
          'eXcKi8XzWTYwxbQ73fSHXYB8nAmTWZDY5EEeid2NQnWYb8fedSQZS3y8eDp8RyDim6CnnWeHFfwzTKzZehznXs3YePjdexw2mee4',
        username: 'ndzy07',
        headImg: 'http://www.ndzy01.com:3850/uploads/user.png',
        toUsername: 'ndzy02',
        toUserHeadImg:
          'http://www.ndzy01.com:3850/uploads/2020-2-18-16-10-26-TIM图片20191215152632.png',
        list: [
          {
            id: '3',
            time: '23小时 前',
            content: '12345',
            user_id:
              'xrz8dRmyjCBKDHGNDaWEZSyfcYYnjyQf6pKitAFBmpY4C8PtBXP2n8cHhccHSaFsC6BbiAChB7efMYFa5RbYQzAApWPRY6yHHQmi',
            username: 'ndzy03',
            headImg: 'http://www.ndzy01.com:3850/uploads/user.png',
            toUsername: 'ndzy07',
            toUserHeadImg: 'http://www.ndzy01.com:3850/uploads/user.png',
            list: '',
          },
          {
            id: '4',
            time: '23小时前',
            content: '我也12345',
            user_id:
              'kCszzxTcAdTsGEzsbTH4HxKBpJH8pdt8QPnZYtXZZkw6kij738y3jpt8sar7HXSCRWkdyKMyPfDsZhCPisDpXrdNcdQ5nAnEYzrd',
            username: 'ndzy03',
            headImg: 'http://www.ndzy01.com:3850/uploads/user.png',
            toUsername: 'ndzy07',
            toUserHeadImg: 'http://www.ndzy01.com:3850/uploads/user.png',
            list: '',
          },
          {
            id:
              'X2mfz364kGAQGBH5T2tPyQYTrah8cAsYGaXp5iHsCBXwDm2KcTSwCNdy4RsY5WMAEht87KweC2TFaZD5Hx2akGinSnPWNCEcHPyi',
            time: '12小时前',
            content: '1234ndzy',
            user_id:
              'z7sbnJi5DAwEZ2DxBPBDYwhzkk2bCP5yBF6Knt6yCakHRnA6b26QtQe5aB6ApzhJES62xfwPdnfwBztsyChztmbt7fGBnFdsHir7',
            username: 'ndzy01',
            headImg:
              'http://www.ndzy01.com:3850/uploads/2020-2-20-14-16-33-TIM图片20191215152632.png',
            toUsername: 'ndzy07',
            toUserHeadImg: 'http://www.ndzy01.com:3850/uploads/user.png',
            list: '',
          },
        ],
      },
    ],
  },
  {
    id: '12',
    time: '8分钟前',
    content: '12355rgghgvh',
    user_id:
      'xrz8dRmyjCBKDHGNDaWEZSyfcYYnjyQf6pKitAFBmpY4C8PtBXP2n8cHhccHSaFsC6BbiAChB7efMYFa5RbYQzAApWPRY6yHHQmi',
    username: 'ndzy03',
    headImg: 'http://www.ndzy01.com:3850/uploads/user.png',
    toUsername: 'ndzy01',
    toUserHeadImg:
      'http://www.ndzy01.com:3850/uploads/2020-2-20-14-16-33-TIM图片20191215152632.png',
    list: [],
  },
]

/**
 * 数组转树  非递归求解
 * 利用数组和对象相互引用  时间复杂度O(n)
 * @param {Object} list
 */
function totree(list, parId) {
  let obj = {}
  let result = []
  //将数组中数据转为键值对结构 (这里的数组和obj会相互引用)
  list.map(el => {
    obj[el.id] = el
  })
  for (let i = 0, len = list.length; i < len; i++) {
    let id = list[i].parent_id
    if (id == parId) {
      result.push(list[i])
      continue
    }
    if (obj[id].children) {
      obj[id].children.push(list[i])
    } else {
      obj[id].children = [list[i]]
    }
  }
  return result
}
const m = [
  {
    id: '1',
    time: '1天前',
    content: '1111',
    user_id: '1',
    parent_id: '0',
    username: 'ndzy02',
    headImg:
      'http://www.ndzy01.com:3850/uploads/2020-2-18-16-10-26-TIM图片20191215152632.png',
    toUsername: 'ndzy07',
    toUserHeadImg: 'http://www.ndzy01.com:3850/uploads/user.png',
    children: [
      {
        id: '2',
        time: '1天前',
        content: 'fw1',
        user_id:
          'eXcKi8XzWTYwxbQ73fSHXYB8nAmTWZDY5EEeid2NQnWYb8fedSQZS3y8eDp8RyDim6CnnWeHFfwzTKzZehznXs3YePjdexw2mee4',
        parent_id: '1',
        username: 'ndzy07',
        headImg: 'http://www.ndzy01.com:3850/uploads/user.png',
        toUsername: 'ndzy02',
        toUserHeadImg:
          'http://www.ndzy01.com:3850/uploads/2020-2-18-16-10-26-TIM图片20191215152632.png',
        children: [
          {
            id: '3',
            time: '23小时前',
            content: '12345',
            user_id:
              'xrz8dRmyjCBKDHGNDaWEZSyfcYYnjyQf6pKitAFBmpY4C8PtBXP2n8cHhccHSaFsC6BbiAChB7efMYFa5RbYQzAApWPRY6yHHQmi',
            parent_id: '2',
            username: 'ndzy03',
            headImg: 'http://www.ndzy01.com:3850/uploads/user.png',
            toUsername: 'ndzy07',
            toUserHeadImg: 'http://www.ndzy01.com:3850/uploads/user.png',
          },
          {
            id: '4',
            time: '23小时前',
            content: '我也12345',
            user_id:
              'kCszzxTcAdTsGEzsbTH4HxKBpJH8pdt8QPnZYtXZZkw6kij738y3jpt8sar7HXSCRWkdyKMyPfDsZhCPisDpXrdNcdQ5nAnEYzrd',
            parent_id: '2',
            username: 'ndzy03',
            headImg: 'http://www.ndzy01.com:3850/uploads/user.png',
            toUsername: 'ndzy07',
            toUserHeadImg: 'http://www.ndzy01.com:3850/uploads/user.png',
          },
          {
            id:
              'X2mfz364kGAQGBH5T2tPyQYTrah8cAsYGaXp5iHsCBXwDm2KcTSwCNdy4RsY5WMAEht87KweC2TFaZD5Hx2akGinSnPWNCEcHPyi',
            time: '12小时前',
            content: '1234ndzy',
            user_id:
              'z7sbnJi5DAwEZ2DxBPBDYwhzkk2bCP5yBF6Knt6yCakHRnA6b26QtQe5aB6ApzhJES62xfwPdnfwBztsyChztmbt7fGBnFdsHir7',
            parent_id: '2',
            username: 'ndzy01',
            headImg:
              'http://www.ndzy01.com:3850/uploads/2020-2-20-14-16-33-TIM图片20191215152632.png',
            toUsername: 'ndzy07',
            toUserHeadImg: 'http://www.ndzy01.com:3850/uploads/user.png',
          },
        ],
      },
    ],
  },
  {
    id: '12',
    time: '8分钟前',
    content: '12355rgghgvh',
    user_id:
      'xrz8dRmyjCBKDHGNDaWEZSyfcYYnjyQf6pKitAFBmpY4C8PtBXP2n8cHhccHSaFsC6BbiAChB7efMYFa5RbYQzAApWPRY6yHHQmi',
    parent_id: '0',
    username: 'ndzy03',
    headImg: 'http://www.ndzy01.com:3850/uploads/user.png',
    toUsername: 'ndzy01',
    toUserHeadImg:
      'http://www.ndzy01.com:3850/uploads/2020-2-20-14-16-33-TIM图片20191215152632.png',
  },
]

let res1 = totree(a, 0)

console.log(JSON.stringify(res1))

/**
 * 数组转树  递归求解
 */
function toTree(list, parId) {
  let len = list.length
  function loop(parId) {
    let res = []
    for (let i = 0; i < len; i++) {
      let item = list[i]
      if (item.parentId === parId) {
        item.children = loop(item.id)
        res.push(item)
      }
    }
    return res
  }
  return loop(parId)
}

let result = toTree(arr, 0)

/**
 * 树转数组扁平化结构
 * 深度优先遍历  堆栈  后进先出
 */
function deep(node) {
  let stack = node,
    data = []
  while (stack.length != 0) {
    let pop = stack.pop()
    data.push({
      id: pop.id,
      time: pop.time,
      content: pop.content,
      user_id: pop.user_id,
      username: pop.username,
      headImg: pop.headImg,
      toUsername: pop.toUsername,
      toUserHeadImg: pop.toUserHeadImg,
    })
    let children = pop.children
    if (children) {
      for (let i = children.length - 1; i >= 0; i--) {
        stack.push(children[i])
      }
    }
  }
  return data
}
console.log(m[0].children)
console.log(deep([m[0]]))

/**
 * 树转数组扁平化结构
 * 深度优先遍历  递归
 */
function deepTraversal(data) {
  const result = []
  data.forEach(item => {
    const loop = data => {
      result.push({
        id: data.id,
        name: data.name,
        parentId: data.parentId,
      })
      let child = data.children
      if (child) {
        for (let i = 0; i < child.length; i++) {
          loop(child[i])
        }
      }
    }
    loop(item)
  })
  return result
}
//console.log(deepTraversal(res1))

/**
 * 广度优先
 * 队列  先进先出
 */
function wideTraversal(node) {
  let stack = node,
    data = []
  while (stack.length != 0) {
    let shift = stack.shift()
    data.push({
      id: shift.id,
      name: shift.name,
      parentId: shift.parentId,
    })
    let children = shift.children
    if (children) {
      for (let i = 0; i < children.length; i++) {
        stack.push(children[i])
      }
    }
  }
  return data
}
//console.log(wideTraversal(res1))
