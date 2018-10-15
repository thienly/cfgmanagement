var router = require('express').Router();
var api = require('./api');
router.use('/api',api);
router.get('*',(req,res)=>{
    res.send("Welcome to our api")
});
module.exports = router;