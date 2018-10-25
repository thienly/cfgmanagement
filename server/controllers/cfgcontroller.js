var cfg = require('../db/models/cfg');

exports.addCfg = async (req,res,next) => {
    var item = new cfg(req.body);
    try {
        let doc = await item.save();
        res.json(doc);
    } catch (error) {
        next(error)
    }    
};
exports.getAllCfg = async (req,res,next) => {
    var data = cfg.find({},(err,items)=>{
        var data = [];
        items.forEach(i=>{
            data.push(i);
        })
        res.json(data);
    });    
};