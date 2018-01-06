// 引用express框架
const express = require('express');
// 引用文件模块
const  fs = require('fs');
// 引用处理路径模块
const psth = require('path');
//
const cookieParser = require('cookie-parser');
// 引用处理post数据模块
const bodyParser = require('body-parser');
//
const session = require('express-session');
// 引入编写好的api
const api = require('./api');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
