const morgan = require('morgan');

let cloudflareIDToken = (request) => {
  return request.headers['cf-ray'];
};

let typeToken = () => { return 'access'; };

morgan.token('type', typeToken);
morgan.token('cloudflare-id', cloudflareIDToken);

let logFormat = {
  type: ':type',
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

// Exported for testing
module.exports.cloudflareIDToken = cloudflareIDToken;
module.exports.typeToken = typeToken;
