module.exports = (function(){
    var sayHi = function(req,res,next){
        res.send('This is get method')
    }
    return {
        getAllCfg : sayHi
    }
}());