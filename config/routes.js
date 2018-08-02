'use strict';

let host = 'localhost';

if (typeof process.env.THORNEY_HOST != 'undefined' && process.env.THORNEY_HOST != '') {
  host = process.env.THORNEY_HOST;
}

// Configure the proxy route, this should point to
// where your back end application runs

module.exports = {
  localhost: {
    default: {
      host: host,
      port: 5401
    }
  },
  'beta.parliament.uk':     generateProxyTargets('web1live'),
  'devci.parliament.uk':    generateProxyTargets('web1devci'),
  'augustus.pdswebops.org': generateProxyTargets('pdswebops')
}

function generateProxyTargets (hostname) {
  return {
    "/^\\/search/": {
      host: `thorney.${hostname}.org`,
      port: 5401
    },
    default: {
      host: `routing.${hostname}.org`,
      port: 80
    }
  }
}
