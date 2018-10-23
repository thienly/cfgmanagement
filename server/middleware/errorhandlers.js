var handler = (function(){
    var logging = function(err, req,res,next){
        console.log(err.stack);
        next(err);    
    };
    var clientErrorHandler = function(err,req,res,next){
        if (req.xhr){
            res.status(500).send({erro:'Something failed!!'});
        }
        next(err);
    };
    var errorHandler = function(err, req, res, next) {
        res.status(500);
        res.json(err.message);
      }
      return {
          logging,
          clientErrorHandler,
          errorHandler
      }
}());
module.exports = handler;