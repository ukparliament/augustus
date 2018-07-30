const appInsights = require('applicationinsights');

module.exports = (middleware = appInsights) => {
  if (process.env.APPLICATION_INSIGHTS_INSTRUMENTATION_KEY == undefined || process.env.APPLICATION_INSIGHTS_INSTRUMENTATION_KEY == '') { return; }

  // For information on debugging this middleware, refer to: middlewares/debuggingAppInsightsMiddleware.md
  middleware.setup(process.env.APPLICATION_INSIGHTS_INSTRUMENTATION_KEY);
  middleware.start();
};

