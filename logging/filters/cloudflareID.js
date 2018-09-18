const extendedLogger = require('../../middlewares/setCloudflareID');

module.exports = function(level, msg) {
  return extendedLogger.getLabel() + ' ' + msg;
};
