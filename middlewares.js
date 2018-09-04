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

  app.use('/', (req, res, next) => {
    console.log(Date.now() + " - !!!!!!!!! GOT REQUEST FOR / !!!!!!!!!");
    res.end('GOT /');
  });
};

module.exports = {
  initialiseAppInsights,
  healthCheck,
  bootstrap: bootstrap
};
