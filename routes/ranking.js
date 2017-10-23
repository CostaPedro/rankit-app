var mongoose = require('mongoose'),
List = mongoose.model('List');    

module.exports = {
    




    all: function(req, res){
        console.log('we are in ranking.all')
        List.find({}, function(err, ranking){
            if(err) res.render('error', { error: 'Could not fetch items from database :('});
            console.log('in the callback')
            res.render('ranking', { ranking: ranking });
        });
    },
    viewOne: function(req, res){
        List.find({ _id: req.params.id }, function(err, ranking){
            res.render('ranking', { ranking: ranking[0] })
        });
    },
    create: function(req, res){
        var rankingContent = req.body.content;
        // create todo
        List.create({ content: rankingContent }, function(err, ranking){
            if(err) res.render('error', { error: 'Error adding item to your list'})
            // reload collection
            res.redirect('/rankings');
            });
    },
    destroy: function(req, res){
        var id = req.params.id;

        List.findByIdAndRemove(id, function(err, ranking){
            if(err) res.render('error', { error: 'Error deleting ranking'});
            res.redirect('/rankings');
        });
    },
    edit: function(req, res){
        Todo.findOneAndUpdate({ _id: req.params.id }, {content: req.body.content}, function(err, ranking){
            res.redirect('/rankings');
        });
    }
};