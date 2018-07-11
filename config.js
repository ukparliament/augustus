'use strict';

const routes = require('./config/routes');
const i18n = require('./config/i18n');
const moduleName = require('./config/moduleName');

module.exports = {
  i18n: i18n,
  routes: routes,
  moduleName: moduleName
};
