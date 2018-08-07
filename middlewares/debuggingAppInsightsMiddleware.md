<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Debugging the Application Insights middleware](#debugging-the-application-insights-middleware)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Debugging the Application Insights middleware

In order to get insight into the [Microsoft Application Insights][appinsights] operation information, you have to explicitly add it as a middleware.

The [Application Insights Node.js SDK][sdk] exposes `getCorrelationContext()`, which lets you inspect the correlation information. You can `console.log` this in your request.

Remove the current `module.exports` in `middlewares/initialiseAppInsights.js` and replace it with the following. Note: You will still need to setup the middleware with your instrumentation key and call `start()` on it.

```javascript
// Clipped for brevity

module.exports = (req, res, next) => {
    console.log(appInsights.getCorrelationContext());

    next();
}
```

In `app.js`, add the following line:

```javascript
// Clipped for brevity

app.use(middlewares.appInsights);

app.start();
```

When you run the server and make a request, an `operation` object will be logged to the terminal.

[sdk]: https://github.com/Microsoft/ApplicationInsights-node.js/
[appinsights]: https://azure.microsoft.com/en-gb/services/application-insights/
