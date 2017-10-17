var mongoose = require('mongoose'),
    List = mongoose.List;

// Ranking model
var List = new Schema({
    title: {type: String},
    author: {type: String},
    entries: {type:Array, default:[]},
    created_at: { type: Date, default: Date.now }
});

mongoose.model('List', List);