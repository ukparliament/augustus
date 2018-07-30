const routes = require('../config/routes');
const moduleName = require('../config/moduleName');
const winston = require('../middlewares').winston;

module.exports = (dirname, log_to_json, logger_library = winston) => {
  if (log_to_json !== 'true') { logger_library = null; }

  return {
    path: {
      themes: dirname
    },
    routes: routes,
    jsonViewParameter: 'json',
    modules: [moduleName],
    log: logger_library
  }
};

