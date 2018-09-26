const extendedLogger = require('../../middlewares/setCloudflareID');

module.exports = function(level, msg) {
  // If NODE_ENV is production or PRODUCTION_LOGGING is a true string, add the Cloudflare ID to the logs
  if (process.env.NODE_ENV === 'production'|| process.env.PRODUCTION_LOGGING === 'true') {
    return extendedLogger.getLabel() + ' ' + msg;
  }
};
