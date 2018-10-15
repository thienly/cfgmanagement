var router = require('express').Router();
var controller = require('../../controllers/cfgcontroller');
router.get('/',controller.getAllCfg);
module.exports = router;