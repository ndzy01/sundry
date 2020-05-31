const imgs = require('./imgs.json')
const fs_ = require('fs')
const path_ = require('path')
function toTree(list, parId) {
  let obj = {}
  let result = []
  //将数组中数据转为键值对结构 (这里的数组和obj会相互引用)
  list.map((el) => {
    obj[el.parentId] = el
  })
  console.log(obj)

  for (let i = 0, len = list.length; i < len; i++) {
    let id = list[i].parentId
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

fs_.writeFileSync(
  path_.relative(__dirname, './a.json'),
  JSON.stringify(toTree(imgs, 0))
)
console.log(toTree(imgs, 0))
