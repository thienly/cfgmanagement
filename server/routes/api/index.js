var router = require('express').Router();
var cfgRouter = require('./cfgrouter');
var userRouter = require('./userrouter');
var authRouter = require('./authrouter');
var checkSignedUser = require('./checksigneduser');
router.use('/user',checkSignedUser,userRouter);
router.use('/cfg',checkSignedUser,cfgRouter);
router.use('/auth',authRouter);

module.exports = router;