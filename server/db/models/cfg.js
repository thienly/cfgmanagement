var mongoose = require('mongoose');
var cfgSchema = require('../schemas/cfgSchema');
var cfgModel = mongoose.model('Cfg',cfgSchema);
module.exports = cfgModel;