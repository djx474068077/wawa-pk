var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var db = mongoose.createConnection('mongodb://localhost:27017/wawa-pk');

//监听open事件
db.once('open', function (callback) {
  console.log("数据库成功连接");
});
db.once('error', function (error) {
  console.log(error);
});
module.exports = db;
