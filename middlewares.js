'use strict';

const initialiseAppInsights = require('./middlewares/initialiseAppInsights');
const healthCheck = require('./middlewares/healthCheck');
const winston = require('./middlewares/winston');
const morgan = require('./middlewares/morgan');

module.exports = {
  initialiseAppInsights,
  healthCheck,
  winston,
  morgan
};
