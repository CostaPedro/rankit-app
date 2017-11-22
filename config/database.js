var mongoose = require('mongoose');

module.exports = function(envConfig){
    // register models
    require('./models/List');

    // connect to database
    mongoose.connect(envConfig.database, function(){
        console.log('connected to database!')
    });

    mongoose.connection.on('error', function() { console.log('MongoDB Connection Error. Please make sure that MongoDB is running.'); process.exit(1); });
};