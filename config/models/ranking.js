var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Ranking model
var List = new Schema({
    title: {type: String},
    author: {type: String},
    entries: {type:Array, default:[]},
    created_at: { type: Date, default: Date.now }
});

const listModel = mongoose.model('List', List);

module.exports = {listModel};