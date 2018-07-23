// Require Shunter
const shunter = require('shunter');
const config = require('./config')
const middlewares = require('./middlewares')

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

app.use(middlewares.appInsights);

// Start the application
app.start();
