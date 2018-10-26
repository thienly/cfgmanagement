var i18n = require('i18n');
i18n.configure({    
    locales:['en', 'vi'],
    defaultLocale:'en',
    directory:'./locales',
    // setting of log level DEBUG - default to require('debug')('i18n:debug')
    logDebugFn: function (msg) {
        console.log('debug', msg);
    },
 
    // setting of log level WARN - default to require('debug')('i18n:warn')
    logWarnFn: function (msg) {
        console.log('warn', msg);
    },
 
    // setting of log level ERROR - default to require('debug')('i18n:error')
    logErrorFn: function (msg) {
        console.log('error', msg);
    },
    register: global,
    api: {
        '__': 't',  //now req.__ becomes req.t
        '__n': 'tn' //and req.__n can be called as req.tn
      }
});
module.exports = i18n;