'use strict';

const initialiseAppInsights = require('./middlewares/initialiseAppInsights');
const healthCheck = require('./middlewares/healthCheck');

module.exports = {
  initialiseAppInsights,
  healthCheck
};
