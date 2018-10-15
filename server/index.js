const express = require('express');
const routes = require('./routes');
var app = express();
var router = app.Router;
app.use(routes);
app.listen(3000, () => console.log('Server listenning on port 3000'));