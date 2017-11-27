var mongoose = require('mongoose'),
List = mongoose.model('List');    

module.exports = {
    
    all: function(req, res){
        console.log('we are in ranking.all')
        List.find({}, function(err, results){
            if(err) res.render('error', { error: 'Could not fetch items from database :('});
            console.log('in the callback')
            res.render('lists', { results: results });
        });
    },
    viewOne: function(req, res){
        console.log('viewOne')
        List.find({ _id: req.params.id }, function(err, ranking){
            res.render('edit', { ranking: ranking[0] })
        });
    },
    create: function(req, res){
        console.log('we are in the create.all')
        var listTitle = req.body.content;
        // create todo
        List.create({ title: listTitle }, function(err, ranking){
            if(err) res.render('error', { error: 'Error adding list to your lists'})
            console.log('in the Create callback')
            // reload collection
            res.redirect('/rankings');
            });
    },
    destroy: function(req, res){
        var id = req.params.id;
        console.log('we are in the destroy')
        List.findByIdAndRemove(id, function(err, ranking){
            if(err) res.render('error', { error: 'Error deleting ranking'});
            res.redirect('/rankings');
        });
    },
    edit: function(req, res){
        List.findOneAndUpdate({ _id: req.params.id }, {content: req.body.content}, function(err, ranking){
            res.redirect('/rankings');
        });
    },
    addItem: function(req,res){
        console.log('we are in the addItem');
        var itemName = req.body.content;
        console.log(itemName);
        var id = req.params.id;
        var currentBody = req.body;
        console.log(id); 
        List.findOneAndUpdate({_id:id},
            {$push:
                {"entries":{title:itemName}},
            },{new:true}, function(err, ranking){
                res.render('edit', {ranking:ranking});
            }); 
    },
    removeItem: function(req,res){
        console.log('we are in the removeItem');
        var item_Name = req.body.itemId;
        console.log(item_Name);
        var id = req.params.id;
        console.log(id); 
        List.findOneAndUpdate({_id:id},
            {$pull:
                {"entries":{_id:item_Name}},
            },{new:true}, function(err, ranking){
            console.log(err, ranking);    
                res.render('edit', {ranking:ranking});
            }); 
    }
};