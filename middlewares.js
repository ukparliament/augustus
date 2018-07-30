'use strict';

const initialiseAppInsights = require('./middlewares/initialiseAppInsights');
const healthCheck = require('./middlewares/healthCheck');
const winston = require('./middlewares/winston');
const morgan = require('./middlewares/morgan');

module.exports = {
  initialiseAppInsights,
  healthCheck,
  winston,
  add: (app, log_to_json, logger_library = morgan, healthCheckMiddleware = healthCheck) => {
    if (log_to_json === 'true') { app.use(logger_library); }

    app.use('/health-check', healthCheckMiddleware);
  }
};
