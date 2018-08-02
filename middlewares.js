'use strict';

const appInsights = require('./middlewares/appInsights');
const healthCheck = require('./middlewares/healthCheck');
const winston = require('./middlewares/winston');
const morgan = require('./middlewares/morgan');

module.exports = {
  appInsights,
  healthCheck,
  winston,
  morgan
};
