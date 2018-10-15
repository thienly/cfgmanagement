var mongoose = require('../connection/dbConnection');
var Schema = mongoose.Schema;
var cfgSchema = new Schema({
    title : String,
    content: String,
    createdBy : String,
    updateddBy : String,
    createdDate : Date,
    updatedDate : Date  
  });
  module.exports = cfgSchema;