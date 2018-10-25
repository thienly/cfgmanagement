var router = require('express').Router();
var controller = require('../../controllers/cfgcontroller');
router.post('/',controller.addCfg);
router.get('',controller.getAllCfg);
module.exports = router;