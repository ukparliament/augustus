var winston = require('winston');

module.exports = function () {
  return (new winston.transports.File({
    name: 'errorLog',
    filename: 'log/error.log',
    level: 'error',
    json: false
  }));
};
