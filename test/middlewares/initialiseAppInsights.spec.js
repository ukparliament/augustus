const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const proxyquire = require('proxyquire').noPreserveCache();
const mockRequire = require('mock-require');

chai.use(sinonChai);

describe('appInsights', () => {
  let applicationInsightsSpy, initialiseAppInsights;

  beforeEach(() => {
    applicationInsightsSpy = { setup: sinon.spy(), start: sinon.spy() };
    mockRequire('applicationinsights', applicationInsightsSpy);

    initialiseAppInsights = proxyquire('../../middlewares/initialiseAppInsights', {});
  });

  describe('it does not call setup and start on the middleware', () => {
    it('when APPLICATION_INSIGHTS_INSTRUMENTATION_KEY is undefined', () => {
      delete process.env['APPLICATION_INSIGHTS_INSTRUMENTATION_KEY'];

      initialiseAppInsights();

      expect(applicationInsightsSpy.setup).to.have.not.been.calledWith();
      expect(applicationInsightsSpy.start).to.have.not.been.calledWith();
    });

    it('when APPLICATION_INSIGHTS_INSTRUMENTATION_KEY is an empty string', () => {
      process.env['APPLICATION_INSIGHTS_INSTRUMENTATION_KEY'] = '';

      initialiseAppInsights();

      expect(applicationInsightsSpy.setup).to.have.not.been.calledWith();
      expect(applicationInsightsSpy.start).to.have.not.been.calledWith();
    });
  });

  describe('it calls setup and start on the middleware', () => {
    it('when APPLICATION_INSIGHTS_INSTRUMENTATION_KEY is provided', () => {
      process.env['APPLICATION_INSIGHTS_INSTRUMENTATION_KEY'] = 'abcdefg';

      initialiseAppInsights();

      expect(applicationInsightsSpy.setup).to.have.been.calledWith('abcdefg');
      expect(applicationInsightsSpy.start).to.have.been.calledWith();
    });
  });
});
