// This first section can be common to many apps:


var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var port = 3000;


var mongoose = require('mongoose');

require('./config/models/ranking');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
// telling Express to serve static objects from /public 
app.use(express.static(path.join(__dirname, 'public')));

// Start server
app.listen(port, function(){
  console.log('Server listening on port ' + port)
});

//++++++++++++++++++++++++++==============++++++++++++++

//Routes




mongoose.connect('mongodb://localhost/Rankings', function(){
    console.log('connected to database!')
});

var main =require ('./routes/main');
var ranking = require ('./routes/ranking');
var rankingsRouter = express.Router();
app.use('/rankings', rankingsRouter);

app.get('/', main.index);
rankingsRouter.get('/', ranking.all);
rankingsRouter.post('/create', ranking.create);
rankingsRouter.post('/destroy/:id', ranking.destroy);
rankingsRouter.post('/edit/:id', ranking.edit);