'use strict';

const winston = require('winston');
const initialiseAppInsights = require('./middlewares/initialiseAppInsights');
const healthCheck = require('./middlewares/healthCheck');
const morgan = require('./middlewares/morgan');
const setCloudflareID = require('./middlewares/setCloudflareID');

const winstonErrorTransport = require('./logging/transports/winston-error');
const winstonProductionTransport = require('./logging/transports/winston-production');
const winstonCloudflareIDFilter = require('./logging/filters/cloudflareID');

let bootstrap = (app) => {
  // If NODE_ENV is production or PRODUCTION_LOGGING is a true string, the default Shunter logging is silenced and JSON logging is used in its place
  if (process.env.NODE_ENV === 'production'|| process.env.PRODUCTION_LOGGING === 'true') {
    app.use(morgan);

    app.getConfig().log = new winston.Logger({
      transports: [
        winstonErrorTransport(),
        winstonProductionTransport(),
      ],
      filters: [winstonCloudflareIDFilter]
    });
  }

  app.use(setCloudflareID);

  app.use('/health-check', healthCheck);
};

module.exports = {
  initialiseAppInsights,
  healthCheck,
  bootstrap: bootstrap
};
