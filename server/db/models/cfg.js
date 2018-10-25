var mongoose = require('../connection/dbConnection');
var Schema = mongoose.Schema;
var cfgSchema = new Schema({
    title : {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    audit: {
        createdBy: String,
        createdDate: Date,
        updatedBy: String,
        updatedDate: Date
    }  
  });
  module.exports = mongoose.model('cfg',cfgSchema);