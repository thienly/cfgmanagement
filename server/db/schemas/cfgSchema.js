var mongoose = require('../connection/dbConnection');
var Schema = mongoose.Schema;
var cfgSchema = new Schema({
    title : String,
    content: String,
    audit: {
        createdBy: 'string',
        createdDate:'datetime',
        updatedBy:'string',
        updatedDate:'datetime'
    }  
  });
  module.exports = cfgSchema;