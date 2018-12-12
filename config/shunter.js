'use strict';

const routes = require('../config/routes');
const { errorPagesConfig } = require('../config/error-pages');

module.exports = (dirname, moduleName) => {
  return {
    path: {
      themes: dirname
    },
    routes: routes,
    jsonViewParameter: 'json',
    modules: [moduleName],
    errorPages: errorPagesConfig(['404', '500', '502'])
  }
};
