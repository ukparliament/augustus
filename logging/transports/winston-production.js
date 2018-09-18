var winston = require('winston');

module.exports = function () {
  return (new winston.transports.File({
    name: 'productionLog',
    filename: 'log/production.log',
    json: false
  }));
};
