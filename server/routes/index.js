let express = require('express')
let router = express.Router()

// Get Home
router.get('/', (req, res, next) => {
  // res.render 表示模板渲染，向index.html中传入title
  res.render('index', {title: 'Express'})
  // res.json 表示返回一个json格式的响应
  res.json()
})

module.exports = router
