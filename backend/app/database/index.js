const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/imgular');
mongoose.Promise = global.Promise;

module.exports = mongoose;