'use strict';

const appInsights = require('./middlewares/appInsights');
const healthCheck = require('./middlewares/healthCheck');

module.exports = {
  appInsights: appInsights,
  healthCheck: healthCheck
};
