'use strict';

const winston = require('winston');
const initialiseAppInsights = require('./middlewares/initialiseAppInsights');
const healthCheck = require('./middlewares/healthCheck');
const morgan = require('./middlewares/morgan');

let bootstrap = (app, logToJson, loggerLibrary = morgan, healthCheckMiddleware = healthCheck) => {
  if (logToJson === 'true') { app.use(loggerLibrary); }

  app.use('/health-check', healthCheckMiddleware);
};

module.exports = {
  initialiseAppInsights,
  healthCheck,
  winstonSilencer: winston.createLogger({ silent: true }),
  bootstrap: bootstrap
};
