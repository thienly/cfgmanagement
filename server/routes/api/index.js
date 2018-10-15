var router = require('express').Router();
var cfgRouter = require('./cfgrouter');
router.use('/cfg',cfgRouter);
module.exports = router;