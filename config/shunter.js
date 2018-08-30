const routes = require('../config/routes');

module.exports = (dirname, moduleName) => {
  return {
    path: {
      themes: dirname
    },
    routes: routes,
    jsonViewParameter: 'json',
    modules: [moduleName],
    errorPages: {
      errorLayouts: {
        default: 'layout',
        404: 'layout-error-404',
        500: 'layout-error-500',
        502: 'layout-error-502'
      }
    }
  }
};
