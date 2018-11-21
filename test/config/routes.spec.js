const expect = require('chai').expect;
const proxyquire = require('proxyquire').noPreserveCache();

describe('routes', () => {
  let routesExpectation = {
    localhost: {
      default: {
        host: 'localhost',
        port: 5401
      }
    },
    'beta.parliament.uk': {
      '/^\\/?(\\?json=true)?$/': {
        host: 'thorney.web1live.org',
        port: 3000
      },
      '/^\\/groups/': {
        host: 'thorney.web1live.org',
        port: 3000
      },
      '/^\\/procedure-steps/': {
        host: 'thorney.web1live.org',
        port: 3000
      },
      '/^\\/proposed-negative-statutory-instruments/': {
        host: 'thorney.web1live.org',
        port: 3000
      },
      '/^\\/laying-bodies/': {
        host: 'thorney.web1live.org',
        port: 3000
      },
      '/^\\/procedures\\/[a-zA-z0-9]{8}\\/work-packages/': {
        host: 'thorney.web1live.org',
        port: 3000
      },
      '/^\\/work-packages/current/': {
        host: 'thorney.web1live.org',
        port: 3000
      },
      '/^\\/work-packages/paper-types/': {
        host: 'thorney.web1live.org',
        port: 3000
      },
      '/^\\/search/': {
        host: 'thorney.web1live.org',
        port: 3000
      },
      '/^\\/statutory-instruments\\/[a-zA-z0-9]{8}\\/?$/': {
        host: 'thorney.web1live.org',
        port: 3000
      },
      '/^\\/houses\\/[a-zA-z0-9]{8}\\/made-available/': {
        host: 'thorney.web1live.org',
        port: 3000
      },
      default: {
        host: 'varnish.web1live.org',
        port: 80
      }
    },
    'devci.parliament.uk': {
      '/^\\/?(\\?json=true)?$/': {
        host: 'thorney.web1devci.org',
        port: 3000
      },
      '/^\\/groups/': {
        host: 'thorney.web1devci.org',
        port: 3000
      },
      '/^\\/procedure-steps/': {
        host: 'thorney.web1devci.org',
        port: 3000
      },
      '/^\\/proposed-negative-statutory-instruments/': {
        host: 'thorney.web1devci.org',
        port: 3000
      },
      '/^\\/laying-bodies/': {
        host: 'thorney.web1devci.org',
        port: 3000
      },
      '/^\\/procedures\\/[a-zA-z0-9]{8}\\/work-packages/': {
        host: 'thorney.web1devci.org',
        port: 3000
      },
      '/^\\/work-packages/current/': {
        host: 'thorney.web1devci.org',
        port: 3000
      },
      '/^\\/work-packages/paper-types/': {
        host: 'thorney.web1devci.org',
        port: 3000
      },
      '/^\\/search/': {
        host: 'thorney.web1devci.org',
        port: 3000
      },
      '/^\\/statutory-instruments\\/[a-zA-z0-9]{8}\\/?$/': {
        host: 'thorney.web1devci.org',
        port: 3000
      },
      '/^\\/houses\\/[a-zA-z0-9]{8}\\/made-available/': {
        host: 'thorney.web1devci.org',
        port: 3000
      },
      default: {
        host: 'varnish.web1devci.org',
        port: 80
      }
    },
    'augustus.pdswebops.org': {
      '/^\\/?(\\?json=true)?$/': {
        host: 'thorney.pdswebops.org',
        port: 3000
      },
      '/^\\/groups/': {
        host: 'thorney.pdswebops.org',
        port: 3000
      },
      '/^\\/procedure-steps/': {
        host: 'thorney.pdswebops.org',
        port: 3000
      },
      '/^\\/proposed-negative-statutory-instruments/': {
        host: 'thorney.pdswebops.org',
        port: 3000
      },
      '/^\\/laying-bodies/': {
        host: 'thorney.pdswebops.org',
        port: 3000
      },
      '/^\\/procedures\\/[a-zA-z0-9]{8}\\/work-packages/': {
        host: 'thorney.pdswebops.org',
        port: 3000
      },
      '/^\\/work-packages/current/': {
        host: 'thorney.pdswebops.org',
        port: 3000
      },
      '/^\\/work-packages/paper-types/': {
        host: 'thorney.pdswebops.org',
        port: 3000
      },
      '/^\\/search/': {
        host: 'thorney.pdswebops.org',
        port: 3000
      },
      '/^\\/statutory-instruments\\/[a-zA-z0-9]{8}\\/?$/': {
        host: 'thorney.pdswebops.org',
        port: 3000
      },
      '/^\\/houses\\/[a-zA-z0-9]{8}\\/made-available/': {
        host: 'thorney.pdswebops.org',
        port: 3000
      },
      default: {
        host: 'varnish.pdswebops.org',
        port: 80
      }
    }
  };

  describe('when THORNEY_HOST is not defined', () => {
    it('the default host is "localhost" and the rest of the routes are correct', () => {
      delete process.env['THORNEY_HOST'];

      const routes = proxyquire('../../config/routes', {});

      expect(routes).to.deep.equal(routesExpectation);
    })
  });

  describe('when THORNEY_HOST is "thorney"', () => {
    it('the defaut host is "thorney" and the rest of the routes are correct', () => {
      process.env['THORNEY_HOST'] = 'thorney';

      routesExpectation.localhost.default.host = 'thorney';

      const routes = proxyquire('../../config/routes', {});

      expect(routes).to.deep.equal(routesExpectation);
    })
  })
});
