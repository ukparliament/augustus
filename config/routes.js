'use strict';

let host = 'localhost';

const thorneyPort = 3000;
const legacyPort = 80;

if (typeof process.env.THORNEY_HOST !== 'undefined' && process.env.THORNEY_HOST !== '') {
  host = process.env.THORNEY_HOST;
}

// Configure the proxy routes - these should point to where your back end applications run
module.exports = {
  localhost: {
    default: {
      host: host,
      port: 5401
    }
  },
  'beta.parliament.uk':     generateProxyTargets('thorney.web1live.org', 'varnish.web1live.org'),
  'devci.parliament.uk':    generateProxyTargets('thorney.web1devci.org', 'varnish.web1devci.org'),
  'augustus.pdswebops.org': generateProxyTargets('thorney.pdswebops.org', 'varnish.pdswebops.org')
};

function generateProxyTargets (thorneyHost, legacyHost) {
  return {
    // Match requests to / for the home page and allow an optional json=true parameter
    '/^\\/?(\\?json=true)?$/': {
      host: thorneyHost,
      port: thorneyPort
    },

    // Match requests to /groups
    '/^\\/groups/': {
      host: thorneyHost,
      port: thorneyPort
    },

    // Match requests to /proposed-negative-statutory-instruments
    '/^\\/proposed-negative-statutory-instruments/': {
      host: thorneyHost,
      port: thorneyPort
    },

    // Match requests to /search
    '/^\\/search/': {
      host: thorneyHost,
      port: thorneyPort
    },

    // Match requests to /procedure-steps
    '/^\\/procedure-steps/': {
      host: thorneyHost,
      port: thorneyPort
    },

    // Match requests to /laying-bodies
    '/^\\/laying-bodies/': {
      host: thorneyHost,
      port: thorneyPort
    },

    // Match requests to /procedures/<8_character_alphanumeric_id>/work-packages/
    '/^\\/procedures\\/[a-zA-z0-9]{8}\\/work-packages/': {
      host: thorneyHost,
      port: thorneyPort
    },

    // Match requests to /work-packages/current
    '/^\\/work-packages/current/': {
      host: thorneyHost,
      port: thorneyPort
    },

    // Match requests to /work-packages/paper-types/
    '/^\\/work-packages/paper-types/': {
      host: thorneyHost,
      port: thorneyPort
    },

    // Match requests to /statutory-instruments/<8_character_alphanumeric_id>
    '/^\\/statutory-instruments\\/[a-zA-z0-9]{8}\\/?$/': {
      host: thorneyHost,
      port: thorneyPort
    },

    // All other requests go here
    default: {
      host: legacyHost,
      port: legacyPort
    }
  };
}
