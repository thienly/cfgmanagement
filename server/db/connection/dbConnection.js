var mongoose = require('mongoose');
mongoose.connect(process.env.db);
var db = mongoose.connection;

db.on('error',err=> {
    console.log('Can not connect to db');
    throw err;
});

db.once('open',function(){
    console.log('We are connected');
});

module.exports = mongoose;