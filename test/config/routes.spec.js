const expect = require('chai').expect
const proxyquire = require('proxyquire').noPreserveCache()

describe('routes', () => {
  let routesExpectation = {
    localhost: {
      default: {
        host: 'imaginaryHost',
        port: 80
      },
      '/^\\/search/': {
        host: 'localhost',
        port: 5401
      },
      '/^\\/statutory-instruments\\/[a-zA-z0-9]{8}$/': {
        "host": 'localhost',
        "port": 5401
      },
    },
    'beta.parliament.uk': {
      '/^\\/search/': {
        host: 'thorney.web1live.org',
        port: 3000
      },
      '/^\\/statutory-instruments\\/[a-zA-z0-9]{8}$/': {
        host: 'thorney.web1live.org',
        port: 3000
      },
      default: {
        host: 'parliamentuk-green.web1live.org',
        port: 80
      }
    },
    'devci.parliament.uk': {
      '/^\\/search/': {
        host: 'thorney.web1devci.org',
        port: 3000
      },
      '/^\\/statutory-instruments\\/[a-zA-z0-9]{8}$/': {
        host: 'thorney.web1devci.org',
        port: 3000
      },
      default: {
        host: 'parliamentuk-green.web1devci.org',
        port: 80
      }
    },
    'augustus.pdswebops.org': {
      '/^\\/search/': {
        host: 'thorney.pdswebops.org',
        port: 3000
      },
      '/^\\/statutory-instruments\\/[a-zA-z0-9]{8}$/': {
        host: 'thorney.pdswebops.org',
        port: 3000
      },
      default: {
        host: 'parliamentuk-green.pdswebops.org',
        port: 80
      }
    }
  };

  describe('when THORNEY_HOST is not defined', () => {
    it('routes.localhost.default.host is "localhost"', () => {
      delete process.env['THORNEY_HOST'];

      const routes = proxyquire('../../config/routes', {});

      expect(routes).to.deep.equal(routesExpectation);
    })
  })

  describe('when THORNEY_HOST is "thorney"', () => {
    it('routes.localhost.default.host is "thorney"', () => {
      process.env['THORNEY_HOST'] = 'thorney';

      routesExpectation.localhost['/^\\/search/'].host = 'thorney';
      routesExpectation.localhost['/^\\/statutory-instruments\\/[a-zA-z0-9]{8}$/'].host = 'thorney';

      const routes = proxyquire('../../config/routes', {});

      expect(routes).to.deep.equal(routesExpectation);
    })
  })
})
