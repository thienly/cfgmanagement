const express = require('express');
const routes = require('./routes');
var errHandler = require('./middleware/errorhandlers');
var config = require('./common/configuration/config');
var asyncmiddleware = require('./middleware/asyncmiddleware');
var app = express();

app.use(routes);
app.use(errHandler.logging);
app.use(errHandler.clientErrorHandler);
app.use(errHandler.errorHandler);

app.listen(3000, () => console.log('Server listenning on port 3000'));

process.on('uncaughtException', function (err) {
    console.log('UNCAUGHT EXCEPTION - keeping process alive:', err); 
});