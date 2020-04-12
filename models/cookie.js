var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cookieSchema = new Schema({
    name: String,
    image: String,
    class: String
});
cookieSchema.set('collection', 'cookie');

module.exports = mongoose.model('cookie', cookieSchema);