var mongoose = require('mongoose'),
List = mongoose.model('List');    

module.exports = {
    




    all: function(req, res){
        console.log('we are in ranking.all')
        List.find({}, function(err, ranking){
            if(err) res.render('error', { error: 'Could not fetch items from database :('});
            console.log('in the callback')
            res.render('lists', { ranking: ranking });
        });
    },
    viewOne: function(req, res){
        List.find({ _id: req.params.id }, function(err, ranking){
            res.render('edit', { ranking: ranking[0] })
        });
    },
    create: function(req, res){
        console.log('we are in the create.all')
        var listTitle = req.body.content;
        // create todo
        List.create({ title: listTitle }, function(err, ranking){
            if(err) res.render('error', { error: 'Error adding item to your list'})
            console.log('in the Create callback')
            // reload collection
            res.redirect('/rankings');
            });
    },
    destroy: function(req, res){
        var id = req.params.id;
        console.log('we are in the create.all')
        List.findByIdAndRemove(id, function(err, ranking){
            if(err) res.render('error', { error: 'Error deleting ranking'});
            res.redirect('/rankings');
        });
    },
    edit: function(req, res){
        List.findOneAndUpdate({ _id: req.params.id }, {content: req.body.content}, function(err, ranking){
            res.redirect('/rankings');
        });
    }
};