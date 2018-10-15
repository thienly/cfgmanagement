var User = require('../db/models/user');
module.exports = (function(){
    var getAllCfg = function(req,res){
        res.send('Hello CFG API');
    };
    var doSaveCfg = function(req,res){
        var data = new User({title:'Test',content:'content test'});
        data.save(function(){
            res.json(data);                
        });
    };
    return {
        getAllCfg : getAllCfg,
        saveCfg : doSaveCfg
    }
}());