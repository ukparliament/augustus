## Debugging the Application Insights middleware

In order to get insight into the [Microsoft Application Insights][appinsights] operation information, you have to explicitly add it as a middleware.

The [Application Insights Node.js SDK][sdk] exposes `getCorrelationContext()`, which lets you inspect the correlation information. You can `console.log` this in your request.

At the bottom of `middlewares/appInsights.js`, export the following function:

```javascript
// snip

module.exports = (req, res, next) => {
    console.log(appInsights.getCorrelationContext());

    next();
}
```

In `app.js`, add the following line:

```javascript
// snip

app.use(middlewares.appInsights);

app.start();
```

When you run the server and make a request, an `operation` object will be logged to the terminal.

[sdk]: https://github.com/Microsoft/ApplicationInsights-node.js/
[appinsights]: https://azure.microsoft.com/en-gb/services/application-insights/
