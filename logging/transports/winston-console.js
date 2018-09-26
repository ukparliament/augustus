const winston = require('winston');
const cloudflareID = require('../../middlewares/cloudflareID');

function customFormat(options) {
  let json = {
    cloudflareID: cloudflareID.getCloudflareID(),
    timestamp: new Date(),
    level: options.level,
    message: options.message
  };

  return JSON.stringify(json);
}

// Options for development
let options = {
  colorize: true,
  timestamp: true,
  level: 'info'
};

// Options for production
if (process.env.NODE_ENV === 'production' || process.env.PRODUCTION_LOGGING === 'true') {
  options = {
    level: 'info',
    formatter: customFormat
  };
}

module.exports = function () {
  return new (winston.transports.Console)(options);
};

// Exported for testing
module.exports.customFormat = customFormat;
