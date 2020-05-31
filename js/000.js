const fs_ = require('fs')
const path_ = require('path')
const PATH = path_.resolve(__dirname, './90年代') // 目录

const imgList = []

//  遍历目录得到文件信息
function walk(path0) {
  const files = fs_.readdirSync(path0)
  files.forEach(function (file) {
    let path1 = path0 + '/' + file
    if (fs_.statSync(path1).isFile()) {
      const bData = fs_.readFileSync(path1)
      const base64Str = bData.toString('base64')
      let file_ = [file, 'data:image/png;base64,' + base64Str]
      imgList.push(file_)
    } else {
      walk(path1)
    }
  })
}

// 运行
walk(PATH)
fs_.writeFileSync('a.txt', JSON.stringify(imgList)) // 字节流保存为图片

// console.log(imgList)
