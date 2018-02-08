let express = require('express')
let router = express.Router()
let mongoose = require('mongoose')
let User = require('../models/User')

// Get Home
// /api/user/list 获取用户信息列表（测试）
router.get('/list', (req, res, next) => {
  // res.render 表示模板渲染，向index.html中传入title
  // res.render('index', {title: 'Express'})
  // res.json 表示返回一个json格式的响应
  // res.json()
  User.find({}, function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      res.json({
        status: 10000,
        msg: '',
        result: {
          count: doc.length,
          list: doc
        }
      })
    }
  })
  // res.send('user router')
})

module.exports = router
