// 引用express框架
const express = require('express')
// 引用文件模块
// const  fs = require('fs')
// 引用处理路径模块
const path = require('path')
// 进行服务器端cookie的转化
const cookieParser = require('cookie-parser')
// 对返回值进行转化
const bodyParser = require('body-parser')
var ejs = require('ejs')
// 对服务器端的session 进行处理
// const session = require('express-session')
// 引入编写好的api
// const api = require('./api')
// 引入路由入口
const index = require('./routes/index')
// 引入用户路由入口
const user = require('./routes/users')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', index)
app.use('/users', user)

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.engine('.html', ejs.__express)
app.set('view engine', 'html')

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})
// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
})
