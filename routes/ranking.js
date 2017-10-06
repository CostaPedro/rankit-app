var mongoose = require('mongoose'),
    List = mongoose.model('List');

module.exports = {
    all: function(req, res){
        List.find({}, function(err, rankings){
            if(err) res.send(err);
            res.json(rankings);
        })
    },
    viewOne: function(req, res){
        List.find({ _id: req.params.id }, function(err, ranking){
            res.render('ranking', { ranking: ranking[0] })
        });
    },
    create: function(req, res){
        console.log('Ranking created')
    },
    destroy: function(req, res){
        console.log('Ranking deleted')
    },
    edit: function(req, res){
        console.log('Ranking ' + req.params.id + ' updated')
    }
};