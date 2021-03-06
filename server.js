var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var todos = require('./routes/todos');

var app = express();
var port = process.env.PORT || 3000
//View Engine 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(express.static(path.join(__dirname, 'client')));
app.use('/', index);
app.use('/api/v1', todos);

app.listen(port, function(){
    console.log('Server Started');
})
