var mongoose = require('mongoose')
var Schema = mongoose.Schema

var loginsSchema = new Schema({
  username:String,
  password:String
})

module.exports = mongoose.model('logins', loginsSchema);