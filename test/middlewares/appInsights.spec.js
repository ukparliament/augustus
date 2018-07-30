const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const proxyquire = require('proxyquire').noPreserveCache();

chai.use(sinonChai);

describe('appInsights', () => {
  let middleware;

  beforeEach(() => {
    middleware = { setup: sinon.spy(), start: sinon.spy() };
  })

  describe('it does not call setup and start on the middleware', () => {
    it('when APPLICATION_INSIGHTS_INSTRUMENTATION_KEY is undefined', () => {
      delete process.env['APPLICATION_INSIGHTS_INSTRUMENTATION_KEY'];

      const appInsights = proxyquire('../../middlewares/appInsights', {})(middleware);

      expect(middleware.setup).to.have.not.been.calledWith();
      expect(middleware.start).to.have.not.been.calledWith();
    })

    it('when APPLICATION_INSIGHTS_INSTRUMENTATION_KEY is an empty string', () => {
      process.env['APPLICATION_INSIGHTS_INSTRUMENTATION_KEY'] = '';

      const appInsights = proxyquire('../../middlewares/appInsights', {})(middleware);

      expect(middleware.setup).to.have.not.been.calledWith();
      expect(middleware.start).to.have.not.been.calledWith();
    })
  })

  describe('it calls setup and start on the middleware', () => {
    it('when APPLICATION_INSIGHTS_INSTRUMENTATION_KEY is provided', () => {
      process.env['APPLICATION_INSIGHTS_INSTRUMENTATION_KEY'] = 'abcdefg';

      const appInsights = proxyquire('../../middlewares/appInsights', {})(middleware);

      expect(middleware.setup).to.have.been.calledWith('abcdefg');
      expect(middleware.start).to.have.been.calledWith();
    })
  })
})
