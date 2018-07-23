const shunter = require('shunter');
const config = require('./config');
const middlewares = require('./middlewares');

// For Shunter configuration documentation, refer to: https://shunter.readthedocs.io/en/latest/usage/configuration-reference/
const app = shunter({
  path: {
    themes: __dirname
  },
  routes: config.routes,
  jsonViewParameter: 'json',
  modules: [config.moduleName]
});

app.start();
