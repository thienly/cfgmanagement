var mongoose = require('../../db/connection/dbConnection');
var authRouter = require('express').Router();
var User = require('../../db/models/user');
var jwt = require('jsonwebtoken');

authRouter.post('/token',(req,res,next)=>{    
    User.findOne({name:req.body.name},(err,user)=>{
        console.log(user);
        if (err)
            next(err);
        if (!user){
            res.status(400).send({success:false, message:'User is not correct'});
        }else if (user){                        
            if (user.password != req.body.password){
                res.status(400).send({success:false, message:'Password is not correct'});
            } else {
                // generate token 
                const payload = {
                    admin: user.admin
                };
                jwt.sign(payload,"secret",{expiresIn:1440},function(error,token){
                    if (error)
                        next(error);
                    res.status(200).json({success:true,message:"Enjoy your token", token: token });
                });    
            }
        }    
    })
});

module.exports = authRouter;