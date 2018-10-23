var router = require('express').Router();
var controller = require('../../controllers/cfgcontroller');
var asyncMiddleware = require('../../middleware/asyncmiddleware');
router.get('/',asyncMiddleware( controller.getAllCfg));
router.post('/',asyncMiddleware(controller.saveCfg));
module.exports = router;