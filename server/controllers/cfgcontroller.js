var User = require('../db/models/user');
module.exports = (function(){
    var getAllCfg = function(req,res,next) {
        throw new Error('This is an exception')
    };
    var doSaveCfg = function(req,res,next){ 
    };
    return {
        getAllCfg : getAllCfg,
        saveCfg : doSaveCfg
    }
}());