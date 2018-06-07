// Require in Shunter
const shunter = require('shunter');

// Create a Shunter application, passing in options
const app = shunter({

    // Configure the themes path to the current directory
    path: {
        themes: __dirname
    },

    // Configure the proxy route, this should point to
    // where your back end application runs
    routes: {
      "localhost": {
        "default": {
          "host": "localhost",
          "port": 5401
        }
      }
    },
    jsonViewParameter: 'json'
});

// Start the application
app.start();
