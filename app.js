const shunter = require('shunter');
const config = require('./config');
const middlewares = require('./middlewares');

middlewares.initialiseAppInsights();

// For Shunter configuration documentation, refer to: https://shunter.readthedocs.io/en/latest/usage/configuration-reference/
const app = shunter(config.shunter(__dirname, config.moduleName));

// Sets up the middlewares for the application
middlewares.bootstrap(app, process.env.LOG_TO_JSON);

app.start();
