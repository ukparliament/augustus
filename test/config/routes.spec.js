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
      '/^\\/search/': {
        host: 'thorney.web1live.org',
        port: 3000
      },
      default: {
        host: 'varnish.web1live.org',
        port: 80
      }
    },
    'devci.parliament.uk': {
      '/^\\/search/': {
        host: 'thorney.web1devci.org',
        port: 3000
      },
      default: {
        host: 'varnish.web1devci.org',
        port: 80
      }
    },
    'augustus.pdswebops.org': {
      '/^\\/search/': {
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
