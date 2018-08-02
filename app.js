const shunter = require('shunter');
const config = require('./config');
const middlewares = require('./middlewares');

let logger;

if (process.env.LOG_TO_JSON === 'true') {
  logger = middlewares.winston;
}

// For Shunter configuration documentation, refer to: https://shunter.readthedocs.io/en/latest/usage/configuration-reference/
const app = shunter({
  path: {
    themes: __dirname
  },
  routes: config.routes,
  jsonViewParameter: 'json',
  modules: [config.moduleName],
  log: logger
});

if (process.env.LOG_TO_JSON === 'true') {
  app.use(middlewares.morgan);
}

app.use('/health-check', middlewares.healthCheck);

app.start();
