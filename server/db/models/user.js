var mongoose = require('mongoose');
var userSchema = require('../schemas/userSchema');
var userModel = mongoose.model('User',userSchema);
module.exports = userModel;