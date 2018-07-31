const expect = require('chai').expect
const proxyquire = require('proxyquire').noPreserveCache()

describe('routes', () => {
  describe('when THORNEY_HOST is not defined', () => {
    it('routes.localhost.default.host is "localhost"', () => {
      process.env['THORNEY_HOST'] = undefined;

      const routes = proxyquire('../../config/routes', {});

      expect(routes.localhost.default.host).to.eq('localhost');
    })
  })

  describe('when THORNEY_HOST is "thorney"', () => {
    it('routes.localhost.default.host is "thorney"', () => {
      process.env['THORNEY_HOST'] = 'thorney';

      const routes = proxyquire('../../config/routes', {});

      expect(routes.localhost.default.host).to.eq('thorney');
    })
  })
})
