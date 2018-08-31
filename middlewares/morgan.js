const morgan = require('morgan');

let cloudflareIDToken = (request) => {
  return request.headers['cf-ray'];
};

morgan.token('cloudflare-id', cloudflareIDToken);

let logFormat = {
  '@timestamp': ':date[iso]',
  remoteip: ':remote-addr',
  cloudflareID: ':cloudflare-id',
  method: ':method',
  url: ':url',
  httpversion: ':http-version',
  status: ':status',
  referrer: ':referrer',
  agent: ':user-agent',
  duration_msec: ':response-time'
};

module.exports = morgan(JSON.stringify(logFormat));
module.exports.cloudflareIDToken = cloudflareIDToken;
