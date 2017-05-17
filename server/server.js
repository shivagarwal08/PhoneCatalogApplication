var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var phonesRoute = require('./routes/phones');
var hrmRoute = require('./routes/hrm');

var port = 4200;

var app = express();
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, '../dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
// app.use('/', indexRoute);
app.use('/api/phones', phonesRoute);
app.use('/api/hrm', hrmRoute);


app.listen(port, function() {
    console.log('server starter on port', port);
});