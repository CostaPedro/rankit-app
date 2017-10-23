var express = require('express');

module.exports = function(app){
    // register route controllers
    var main = require('../routes/main');
    var ranking = require('../routes/ranking');
    var rankRouter = express.Router();
    app.use('/rankings', rankRouter);

    app.get('/', main.index);
    rankRouter.get('/', ranking.all);
    rankRouter.get('/:id', ranking.viewOne);
    rankRouter.post('/create', ranking.create);
    rankRouter.post('/destroy/:id', ranking.destroy);
    rankRouter.post('/edit/:id', ranking.edit);
};