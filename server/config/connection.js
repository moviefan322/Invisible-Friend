const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/merndb')
console.log(`MongoDB Connected`.red);


module.exports = mongoose.connection;
