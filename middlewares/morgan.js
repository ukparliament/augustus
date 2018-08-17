const morgan = require('morgan');

let logFormat = {
  '@timestamp': ':date[iso]',
  remoteip: ':remote-addr',
  method: ':method',
  url: ':url',
  httpversion: ':http-version',
  status: ':status',
  referrer: ':referrer',
  agent: ':user-agent',
  duration_msec: ':response-time'
};

module.exports = morgan(JSON.stringify(logFormat));
