const fs = require('fs')
const path_ = require('path')
const PATH = './music' // 目录
const readDir = fs.readdirSync(PATH)
let musicList = []
for (let i = 0; i < readDir.length; i++) {
  let item = [
    'music/' + (i + 1) + path_.extname(readDir[i]),
    path_.basename(readDir[i], path_.extname(readDir[i])),
    (i + 1).toString(),
  ]
  musicList.push(item)
}

//  遍历目录得到文件信息
function walk(path, callback) {
  var files = fs.readdirSync(path)

  files.forEach(function (file) {
    if (fs.statSync(path + '/' + file).isFile()) {
      callback(path, file)
    }
  })
}

// 修改文件名称
function rename(oldPath, newPath) {
  fs.rename(oldPath, newPath, function (err) {
    if (err) throw err
  })
}

// 运行
walk(PATH, function (path, fileName) {
  const name = path_.basename(fileName, path_.extname(fileName))
  for (let i = 0; i < musicList.length; i++) {
    if (name === musicList[i][1]) {
      let oldPath = path + '/' + fileName
      let newPath = path + '/' + musicList[i][2] + path_.extname(fileName)
      rename(oldPath, newPath)
    }
  }
})

