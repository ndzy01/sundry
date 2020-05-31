/*
 * @Author: ndzy
 * @Date: 2020-02-21 16:46:05
 * @LastEditTime: 2020-02-23 10:31:20
 * @LastEditors: ndzy
 */
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
        user_id: obj.user_id,
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
        user_id: obj.user_id,
        username: obj.username,
        headImg: obj.headImg,
        toUsername: obj.toUsername,
        toUserHeadImg: obj.toUserHeadImg,
        list: '',
      })
    }
  }
  console.log(list)

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
const b = [
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

for (let i = 0; i <b.length ; i++) {
console.log(b[i])
}