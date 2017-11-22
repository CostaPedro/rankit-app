var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Ranking model

var Entries = new Schema({
    title: String
  , body: String
});

var List = new Schema({
    title: String,
    author: {type: String},
    entries: [Entries],
    created_at: { type: Date, default: Date.now }
});

mongoose.model('List', List);


