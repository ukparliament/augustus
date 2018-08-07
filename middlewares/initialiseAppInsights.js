const appInsights = require('applicationinsights');

module.exports = () => {
  if (process.env.APPLICATION_INSIGHTS_INSTRUMENTATION_KEY == undefined || process.env.APPLICATION_INSIGHTS_INSTRUMENTATION_KEY == '') { return; }

  // For information on debugging this middleware, refer to: middlewares/debuggingAppInsightsMiddleware.md
  appInsights.setup(process.env.APPLICATION_INSIGHTS_INSTRUMENTATION_KEY);
  appInsights.start();
};
