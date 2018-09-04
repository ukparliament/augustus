'use strict';

const winston = require('winston');
const initialiseAppInsights = require('./middlewares/initialiseAppInsights');
const healthCheck = require('./middlewares/healthCheck');
const morgan = require('./middlewares/morgan');

let bootstrap = (app, logToJson) => {
  // If logToJson is a true string, the default Shunter logging is silenced and JSON logging is used in its place
  if (logToJson === 'true') {
    app.use(morgan);

    app.getConfig().log = winston.createLogger({ silent: true });
  }

  app.use('/health-check', healthCheck);

  app.use('/', (req, _, next) => {
    let S4 = function() {
      return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    let id = (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    console.log(`BEGIN ${id}`);
    console.log(req);
    next();
    console.log(`END ${id}`);
  });
};

module.exports = {
  initialiseAppInsights,
  healthCheck,
  bootstrap: bootstrap
};
