
const express = require('express');
const routes = require('./routes');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var i18n = require('./locales/L');

var path = require('path');

var errHandler = require('./middleware/errorhandlers');

var app = express();

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(bodyParser.json());
app.use(methodOverride());
app.use(i18n.init);

app.get('/',function(req,res,next){
    var gretting = t('Hello1');
    res.send(gretting);
});

app.use(routes);
app.use(errHandler.logging);
app.use(errHandler.clientErrorHandler);
app.use(errHandler.errorHandler);

app.listen(3000, () => console.log('Server listenning on port 3000'));

process.on('uncaughtException', function (err) {
    console.log('UNCAUGHT EXCEPTION - keeping process alive:', err); 
}); 