var express = require('express');

module.exports = function(app){
    // register route controllers
    var main = require('../routes/main');
    var ranking = require('../routes/ranking');
    var rankRouter = express.Router();
    app.use('/rankings', rankRouter);

    app.get('/', main.index);
    rankRouter.get('/', ranking.all);
    rankRouter.post('/edit/:id', ranking.edit);
    rankRouter.get('/:id', ranking.viewOne);
    rankRouter.post('/create', ranking.create);
    rankRouter.post('/destroy/:id', ranking.destroy);
    rankRouter.post('/:id/addItem', ranking.addItem);
    rankRouter.post('/:id/removeItem',ranking.removeItem);
    rankRouter.get('/:id/editItemPage/:itemId',ranking.editItemPage);
    rankRouter.post('/:itemId/editItem',ranking.editItem)
};