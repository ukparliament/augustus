const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const morgan = require('../middlewares/morgan');
const healthCheck = require('../middlewares/healthCheck');
const proxyquire = require('proxyquire').noPreserveCache();
const mockRequire = require('mock-require');

chai.use(sinonChai);

describe('#bootstrap', () => {
  let app, log, winston, middlewares;

  beforeEach(() => {
    winston = { createLogger: sinon.spy() };
    mockRequire('winston', winston);
    middlewares = proxyquire('../middlewares', {});

    log = {};

    app = { use: sinon.spy(), getConfig: () => { return log; } };
  })

  it('adds only the healthCheck middleware', () => {
    middlewares.bootstrap(app);

    expect(app.use).to.have.been.calledWith('/health-check', healthCheck);
    expect(app.use).to.have.not.been.calledWith(morgan);
  })

  it('uses morgan and silences winston if logToJson is a true string', () => {
    middlewares.bootstrap(app, 'true');

    expect(app.use).to.have.been.calledWith(morgan);
    expect(winston.createLogger).to.have.been.calledWith({ silent: true });
  })
})
