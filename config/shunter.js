const routes = require('../config/routes');
const winstonSilencer = require('../middlewares').winstonSilencer;

module.exports = (dirname, moduleName, logToJson, loggerLibrary = winstonSilencer) => {
  // Setting loggerLibrary to null tells Shunter to defer to its default logging behaviour
  if (logToJson !== 'true') { loggerLibrary = null; }

  return {
    path: {
      themes: dirname
    },
    routes: routes,
    jsonViewParameter: 'json',
    modules: [moduleName],
    log: loggerLibrary,
    errorPages: {
      errorLayouts: {
          default: 'layout',
          404: 'layout-error-404',
          500: 'layout-error-500'
      }
    }
  }
};
