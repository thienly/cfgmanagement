
const express = require('express');
const routes = require('./routes');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var errHandler = require('./middleware/errorhandlers');

var app = express();

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(bodyParser.json());
app.use(methodOverride());
app.use(routes);
app.use(errHandler.logging);
app.use(errHandler.clientErrorHandler);
app.use(errHandler.errorHandler);

app.listen(3000, () => console.log('Server listenning on port 3000'));

process.on('uncaughtException', function (err) {
    console.log('UNCAUGHT EXCEPTION - keeping process alive:', err); 
});