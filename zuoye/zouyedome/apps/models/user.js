var mongoose=require("../ii.js")
var userSchema = new mongoose.Schema({
    name:String,
    age:String,
    sex:String,
    nation:String,
    identity:String,
    phone:String,
    position:String
});

// user 数据表，【注意】 mongoose 会自动在传入的表名后新增1个s
//       user  ==> users
var u = mongoose.model('user', userSchema);
module.exports=u;