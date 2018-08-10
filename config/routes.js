'use strict';

const ProxyTarget = require('../lib/proxy-target');

let host = 'localhost';

if (typeof process.env.THORNEY_HOST != 'undefined' && process.env.THORNEY_HOST != '') {
  host = process.env.THORNEY_HOST;
}

// Configure the proxy routes - these should point to where your back end applications run
module.exports = {
  localhost:                new ProxyTarget(host, 5401, 'imaginaryHost').generate(),
  'beta.parliament.uk':     new ProxyTarget('thorney.web1live.org', 3000, 'parliamentuk-green.web1live.org').generate(),
  'devci.parliament.uk':    new ProxyTarget('thorney.web1devci.org', 3000, 'parliamentuk-green.web1devci.org').generate(),
  'augustus.pdswebops.org': new ProxyTarget('thorney.pdswebops.org', 3000, 'parliamentuk-green.pdswebops.org').generate()
};
