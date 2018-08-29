const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const middlewares = require('../middlewares');
const morgan = require('../middlewares/morgan');
const healthCheck = require('../middlewares/healthCheck');

chai.use(sinonChai);

describe('#add', () => {
  let app;

  beforeEach(() => {
    app = { use: sinon.spy() };
  })

  it('only adds the healthCheck middleware if log_to_json is not a true string', () => {
    middlewares.bootstrap(app, 'false', 'logger_library', 'healthCheck');

    expect(app.use).to.have.not.been.calledWith('logger_library');
    expect(app.use).to.have.been.calledWith('/health-check', 'healthCheck');
  })

  it('adds the healthCheck and logger middleware if log_to_json is a true string', () => {
    middlewares.bootstrap(app, 'true', 'logger_library', 'healthCheck');

    expect(app.use).to.have.been.calledWith('logger_library');
    expect(app.use).to.have.been.calledWith('/health-check', 'healthCheck');
  })

  it('if logger_library and healthCheckMiddleware are not provided', () => {
    middlewares.bootstrap(app, 'true');

    expect(app.use).to.have.been.calledWith(morgan);
    expect(app.use).to.have.been.calledWith('/health-check', healthCheck);
  })
})
