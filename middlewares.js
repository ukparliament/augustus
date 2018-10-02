'use strict';

const initialiseAppInsights = require('./middlewares/initialiseAppInsights');
const healthCheck = require('./middlewares/healthCheck');
const robots = require('./middlewares/robots');
const morgan = require('./middlewares/morgan');
const setCloudflareID = require('./middlewares/cloudflareID').setCloudflareID;

let bootstrap = (app) => {
  // If NODE_ENV is production or PRODUCTION_LOGGING is a true string, JSON access logs are logged in addition to Shunter JSON logs
  if (process.env.NODE_ENV === 'production'|| process.env.PRODUCTION_LOGGING === 'true') {
    app.use(morgan);
  }

  app.use(setCloudflareID);

  app.use('/health-check', healthCheck);
  app.use('/robots.txt', robots);
};

module.exports = {
  initialiseAppInsights,
  bootstrap: bootstrap
};
