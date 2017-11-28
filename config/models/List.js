var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Ranking model

var Entries = new Schema({
    title: {type: String, required: true},
  	body: String
});

var List = new Schema({
    title: {type:String, required:true},
    author: {type: String},
    entries: [Entries],
    created_at: { type: Date, default: Date.now }
});

List.path('title').validate(function(value, done) {
	console.log('try to validate',value)
    this.model('List').count({ title: value }, function(err, count) {
        if (err) {
            return done(err);
        } 
        // If `count` is greater than zero, "invalidate"
        done(!count);
    });
}, 'title already exists');

mongoose.model('List', List);


