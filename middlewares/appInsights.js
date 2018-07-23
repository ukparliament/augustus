const appInsights = require("applicationinsights");
appInsights.setup("c0960a0f-30ad-4a9a-b508-14c6a4f61179");
appInsights.start();

module.exports = (req, res, next) => {
    let operationId = appInsights.getCorrelationContext().operation.parentId;

    res.setHeader('ApplicationInsights.request.id', operationId);

    next();
}
