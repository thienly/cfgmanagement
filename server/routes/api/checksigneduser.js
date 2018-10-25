var jwt = require('jsonwebtoken');
module.exports = function(req,res,next) {
    if (req.header('x-access-token')){
        var token = req.header('x-access-token');
        var decode =  jwt.decode(token);
        console.log(decode);
        if (decode){
            next();
        }
    }else {
        res.status(401).send();
    }
};