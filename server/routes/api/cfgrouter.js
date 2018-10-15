var router = require('express').Router();
var controller = require('../../controllers/cfgcontroller');
router.get('/',controller.getAllCfg);
router.post('/',controller.saveCfg);
module.exports = router;