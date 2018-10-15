var mongoose = require('mongoose');
mongoose.connect('mongodb://10.0.19.109:27017/cfgmanagement');
var db = mongoose.connection;
db.on('error',err=>{
    console.log('Can not connect to db')
});
db.once('open',function(){
    console.log('We are connected');
});
module.exports = mongoose;