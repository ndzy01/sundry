/*
 * @Author: ndzy
 * @Date: 2020-02-21 19:16:41
 * @LastEditTime: 2020-02-21 19:38:35
 * @LastEditors: ndzy
 */
const a = [
  {
    id: 1,
    time: '创建时间到现在的分钟数',
    content: '内容',
    user_id: '用户id',
    parent_id: 0,
    username: '用户名',
    headImg: '用户头图',
    toUsername: '被评论用户名',
    toUserHeadImg: '被评论用头图',
  },
  {
    id: 2,
    time: '创建时间到现在的分钟数',
    content: '内容',
    user_id: '用户id',
    parent_id: 1,
    username: '用户名',
    headImg: '用户头图',
    toUsername: '被评论用户名',
    toUserHeadImg: '被评论用头图',
  },
  {
    id: 3,
    time: '创建时间到现在的分钟数',
    content: '内容',
    user_id: '用户id',
    parent_id: 2,
    username: '用户名',
    headImg: '用户头图',
    toUsername: '被评论用户名',
    toUserHeadImg: '被评论用头图',
  },
]
function generateOptions(dataList) {
  //生成Cascader级联数据
  // 定义result存储生成的数据
  let result = []

  for (let obj of dataList) {
    // 判断父id是否存在,0顶层节点
    // console.log(obj)
    if (obj.parent_id == 0) {
      let parent = {
        //转换成el-Cascader可以识别的数据结构
        id: obj.id,
        time: obj.time,
        content: obj.content,
        userId: obj.user_id,
        username: obj.username,
        headImg: obj.headImg,
        toUsername: obj.toUsername,
        toUserHeadImg: obj.toUserHeadImg,
        list: '',
      }
      // console.log(parent)
      parent.list = getChildS(obj.id, dataList) //获取子节点
      result.push(parent)
    }
  }
  return result
}
function getChildS(id, dataList) {
  let list = new Array()
  for (let obj of dataList) {
    //循环获取子节点
    if (obj.parent_id == id) {
      list.push({
        id: obj.id,
        time: obj.time,
        content: obj.content,
        userId: obj.user_id,
        username: obj.username,
        headImg: obj.headImg,
        toUsername: obj.toUsername,
        toUserHeadImg: obj.toUserHeadImg,
        list: '',
      })
    }
  }

  for (let child of list) {
    //获取子节点的子节点
    let childCopy = getChildS(child.id, dataList) //递归获取子节点
    if (childCopy.length > 0) {
      child.list = childCopy
    }
  }
  return list
}
// console.log(JSON.stringify(generateOptions(a)))
function timeFn(time) {
  if (time > 60 && time < 60 * 24) {
    const h = parseInt(time / 60)

    return `${h}小时前`
  }
  if (time > 60 * 24 && time <= 60 * 24 * 30) {
    const d = parseInt(time / (60 * 24))
    return `${d}天前`
  }
  if (time > 60 * 24 * 30 && time <= 60 * 24 * 30 * 12) {
    const m = parseInt(time / (60 * 24 * 30))
    return `${m}月前`
  }
  if (time > 60 * 24 * 30 * 12) {
    const y = parseInt(time / (60 * 24 * 30 * 12))
    return `${y}年前`
  }
  return `${time}分钟前`
}
console.log(timeFn(5))
console.log(timeFn(5 + 60))
console.log(timeFn(5 + 60 * 24))
console.log(timeFn(5 + 60 * 24 * 30))
console.log(timeFn(5 + 60 * 24 * 30*12))
