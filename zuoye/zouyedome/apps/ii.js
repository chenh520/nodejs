var mongoose = require('mongoose');

// 连接到本地数据库           IP:端口   /      数据库名  
mongoose.connect('mongodb://localhost:27017/jbxx');
module.exports=mongoose;