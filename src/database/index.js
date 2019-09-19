const mongoose = require('../database');

mongoose.connect('mongodb://vinicius:ocean4drive@ds123500.mlab.com:23500/vvtcesjfvmarquest', {useMongoClient: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;

