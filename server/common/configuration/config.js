var y = require('yargs').argv;
var path = require('path');
var Promise = require('bluebird');
var fs = Promise.promisify(require('fs').readFile);
y.env = y.env || 'dev';
var config = {};
function filePath(env){
    let x = `appsettings.${env}.json`;
    return path.join(__dirname,x);     
};
 
fs(filePath(y.env),{ encoding:'utf-8'}).then(x=> {
    config = JSON.parse(x);
}).catch( er=> {
    throw new Error('Can not load configuration file for dev environment');
});
module.exports = config;
