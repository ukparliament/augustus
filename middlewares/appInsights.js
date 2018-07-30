if (process.env.APPLICATION_INSIGHTS_INSTRUMENTATION_KEY == undefined || process.env.APPLICATION_INSIGHTS_INSTRUMENTATION_KEY == '') { return; };

// For information on debugging this middleware, refer to: middlewares/debuggingAppInsightsMiddleware.md
const appInsights = require("applicationinsights");

appInsights.setup(process.env.APPLICATION_INSIGHTS_INSTRUMENTATION_KEY);
appInsights.start();
