'use strict';

let host = 'localhost';

if (typeof process.env.THORNEY_HOST != 'undefined' && process.env.THORNEY_HOST != '') {
  host = process.env.THORNEY_HOST;
}

// Configure the proxy routes - these should point to where your back end applications run
module.exports = {
  localhost:                generateProxyTargets(host, 5401, 'imaginaryHost', 80),
  'beta.parliament.uk':     generateProxyTargets('thorney.web1live.org', 3000, 'varnish.web1live.org', 80),
  'devci.parliament.uk':    generateProxyTargets('thorney.web1devci.org',  3000, 'varnish.web1devci.org', 80),
  'augustus.pdswebops.org': generateProxyTargets('thorney.pdswebops.org', 3000, 'varnish.pdswebops.org', 80)
};

function generateProxyTargets (host, port, defaultHost, defaultPort) {
  return {
    // Match requests to /search
    '/^\\/search/': {
      host: host,
      port: port
    },
    // Match requests to /statutory-instruments/<8_character_alphanumeric_id>
    '/^\\/statutory-instruments\\/[a-zA-z0-9]{8}$/': {
      host: host,
      port: port
    },
    // All other requests go here
    default: {
      host: defaultHost,
      port: defaultPort
    }
  }
};
