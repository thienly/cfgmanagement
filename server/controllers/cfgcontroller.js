var User = require('../db/models/user');
module.exports = (function(){
    var getAllCfg = async (req,res,next) => {
        throw new Error('This is an exception')
    };
    var addCfg =  (req,res,next) => {
        console.log(req.body);
        console.log(req.body.param1);        
    };
    return {
        getAllCfg : getAllCfg,
        addCfg : addCfg
    }
}());