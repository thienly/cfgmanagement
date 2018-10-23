var User = require('../db/models/user');
module.exports = (function(){
    var getAllCfg = async (req,res,next) => {
        throw new Error('This is an exception')
    };
    var addCfg =  (req,res,next) => {
        console.log(req.body);     
        res.json('Added API');   
    };
    return {
        getAllCfg : getAllCfg,
        addCfg : addCfg
    }
}());