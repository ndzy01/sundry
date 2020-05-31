var fs = require('fs')
var path_ = require('path')
var PATH = './music' // 目录
const musicList = [
  [
    'music/01.flac',
    'All Falls Down - Alan Walker&Noah Cyrus&Digital Farm Animals&Juliander',
    '1',
  ],
  ['music/02.flac', 'Bye Bye Bye - Lovestoned', '2'],
  ['music/03.flac', 'Fall In Love - Ramzi', '3'],
  ['music/04.flac', 'Firework - Katy Perry', '4'],
  ['music/05.flac', 'Get Me - Justin Bieber&Kehlani', '5'],
  ['music/06.flac', "Girl, You'll Be a Woman Soon - Urge Overkill", '6'],
  ['music/07.flac', 'Hall of Fame - The Script&will.i.am', '7'],
  ['music/08.flac', 'I Am You - Kim Taylor', '8'],
  ['music/09.mp3', "I'll Be There For You - The Rembrandts", '9'],
  ['music/10.flac', 'Lemon - 米津玄師', '10'],
  ['music/11.flac', 'Move Your Body - Sia', '11'],
  ['music/12.flac', 'See You Again - Wiz Khalifa&Charlie Puth', '12'],
  ['music/13.flac', 'Señorita - Shawn Mendes&Camila Cabello', '13'],
  ['music/14.flac', 'Shallow - Lady Gaga&Bradley Cooper', '14'],
  ['music/15.mp3', 'Sugar 〈Explicit) - Maroon 5', '15'],
  ['music/16.flac', 'Sway - Syn Cole&Nevve', '16'],
  ['music/17.mp3', 'Sweet but Psycho - Ava Max', '17'],
  ['music/18.flac', 'The Day You Went Away - M2M', '18'],
  ['music/19.flac', 'Traveling Light - Joel Hanson', '19'],
  ['music/20.flac', 'What Makes You Beautiful - One Direction', '20'],
  ['music/21.flac', 'Yesterday Once More - Carpenters', '21'],
  ['music/22.flac', "You're Beautiful - James Blunt", '22'],
  ['music/23.mp3', '一生所爱 - 卢冠廷', '23'],
  ['music/24.flac', '下山 - 要不要买菜', '24'],
  ['music/25.flac', '不染 - 毛不易', '25'],
  ['music/26.mp3', '世界第一等 - 霈丹（浪哥）', '26'],
  ['music/27.mp3', '世间美好与你环环相扣 〈女版_Cover：柏松) - 吕口口', '27'],
  ['music/28.flac', '云烟成雨 - 房东的猫', '28'],
  ['music/29.flac', '体面 - 于文文', '29'],
  ['music/30.flac', '你的答案 - 阿冗', '30'],
  ['music/31.flac', '你的酒馆对我打了烊 - 陈雪凝', '31'],
  ['music/32.flac', '侧脸 - 于果', '32'],
  ['music/33.flac', '偏爱 - 张芸京', '33'],
  ['music/34.flac', '写给你的十八行诗 - 兔子牙', '34'],
  ['music/35.flac', '出山 - 花粥&王胜娚', '35'],
  ['music/36.mp3', '分手那天 - 于文文', '36'],
  ['music/37.flac', '匆匆那年 - 王菲', '37'],
  ['music/38.flac', '单身情歌 - 林志炫', '38'],
  ['music/39.flac', '卡布奇诺 - 曲肖冰', '39'],
  ['music/40.flac', '句号 - G.E.M. 邓紫棋', '40'],
  ['music/41.flac', '同桌的你 - 胡夏', '41'],
  ['music/42.flac', '后来 - 刘若英', '42'],
  ['music/43.flac', '告白气球 - 周杰伦', '43'],
  ['music/44.flac', '喜欢 - 阿肆', '44'],
  ['music/45.FLAC', '多想在平庸的生活拥抱你 - 隔壁老樊', '45'],
  ['music/46.flac', '大海 - 张雨生', '46'],
  ['music/47.flac', '大田後生仔 - 丫蛋蛋', '47'],
  ['music/48.flac', '失眠飞行 - 接个吻，开一枪&沈以诚&薛明媛', '48'],
  ['music/49.flac', '孤身 - 徐秉龙', '49'],
  ['music/50.flac', '富士山下 - 陈奕迅', '50'],
  ['music/51.flac', '少年 - 梦然', '51'],
  ['music/52.flac', '左手指月 - 萨顶顶', '52'],
  ['music/53.flac', '帝都 - 萌萌哒天团', '53'],
  ['music/54.flac', '归去来兮 - 花粥', '54'],
  ['music/55.flac', '当爱已成往事 - 李宗盛&林忆莲', '55'],
  ['music/56.flac', '心如止水 - Ice Paper', '56'],
  ['music/57.flac', '慕夏 - 等什么君', '57'],
  ['music/58.flac', '我要找到你 - Zic子晨', '58'],
  ['music/59.mp3', '我要的（原唱：C.vo& 阿达娃& 苏靖凯） - 吕口口', '59'],
  ['music/60.flac', '挪威的森林 - 伍佰', '60'],
  ['music/61.flac', '明月天涯 - 肥皂菌丨珉珉的猫咪丨', '61'],
  ['music/62.flac', '星辰变 - 肥皂菌丨珉珉的猫咪丨', '62'],
  ['music/63.flac', '晚安 - 颜人中', '63'],
  ['music/64.flac', '最甜情歌 〈女生版〉  - 一玟', '64'],
  ['music/65.flac', '最美的伤口 - DJ小鱼儿', '65'],
  ['music/66.flac', '有何不可 - 许嵩', '66'],
  ['music/67.flac', '浮白 - 花粥&王胜娚', '67'],
  ['music/68.flac', '消愁 - 毛不易', '68'],
  ['music/69.flac', '牵丝戏 - 银临&Aki阿杰', '69'],
  ['music/70.flac', '真的爱你 - BEYOND', '70'],
  ['music/71.flac', '突然的自我 - 伍佰', '71'],
  ['music/72.mp3', '素颜 - 许嵩&何曼婷', '72'],
  ['music/73.flac', '红日 〈粤语) - 李克勤', '73'],
  ['music/74.flac', '红昭愿 - 音阙诗听', '74'],
  ['music/75.flac', '红色高跟鞋 - 蔡健雅', '75'],
  ['music/76.flac', '纸短情长 - 烟把儿乐队', '76'],
  ['music/77.flac', '绿色 - 陈雪凝', '77'],
  ['music/78.mp3', '老男孩 - 筷子兄弟', '78'],
  ['music/79.flac', '芒种 - 音阙诗听&赵方婧', '79'],
  ['music/80.flac', '过客 - 周思涵', '80'],
  ['music/81.flac', '还是分开 - 张叶蕾', '81'],
  ['music/82.flac', '遇见 - 孙燕姿', '82'],
  ['music/83.flac', '遗憾 - 王佳杨', '83'],
  ['music/84.flac', '那么骄傲 - 金海心', '84'],
  ['music/85.flac', '那女孩对我说（女生正式版） - 戴羽彤', '85'],
  ['music/86.flac', '野狼disco - 宝石Gem', '86'],
  ['music/87.flac', '陌路逢君 - 等什么君', '87'],
  ['music/88.flac', '雅俗共赏 - 许嵩', '88'],
  ['music/89.flac', '飞 - 王恩信Est&二胖u', '89'],
  ['music/90.flac', '默 - 那英', '90'],
]

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
      // console.log(oldPath, newPath)
      rename(oldPath, newPath)
    }
  }
})
