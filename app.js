// Require in Shunter
const shunter = require('shunter');
const config = require('./config');

// Create a Shunter application, passing in options
const app = shunter({

    // Configure the themes path to the current directory
  path: {
    themes: __dirname
  },
  routes: config.routes,
  jsonViewParameter: 'json',
  modules: [config.moduleName]
});

// Start the application
app.start();
