var mongoose = require('mongoose'),
    List = mongoose.model('List');


module.exports = {
    index: function(req, res) {
    	console.log('hello main!');
        res.render('main', { title: 'Rankings List' });
    }
};