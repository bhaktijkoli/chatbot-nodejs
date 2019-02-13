const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/' + process.env.MONGODB_DATABASE);
mongoose.Promise = global.Promise;
