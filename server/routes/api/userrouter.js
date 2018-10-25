var express  = require('express');
var User = require('../../db/models/user');
var userRouter = express.Router();
var jwt =  require('jsonwebtoken');
userRouter.post('/setup',async (req,res,next)=>{

    var data = new User({name: req.body.name, password: req.body.password
    });
    try {
        var doc = await data.save();
        res.json(doc);
    } catch (error) {
        next(error);
    }    
});
userRouter.get('/',function(req,res,next){
    User.find({},function(err,items){
        let data = [];
        if (err)
            next(err);
        items.forEach(i=>{
            data.push(i);
        });
        res.json(data);
    });
});

module.exports = userRouter;