const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const morgan = require('../middlewares/morgan');
const healthCheck = require('../middlewares/healthCheck');
const setCloudflareID = require('../middlewares/setCloudflareID');
const proxyquire = require('proxyquire').noPreserveCache();
const mockRequire = require('mock-require');

const winstonErrorTransport = require('../logging/transports/winston-error');
const winstonProductionTransport = require('../logging/transports/winston-production');
const winstonCloudflareIDFilter = require('../logging/filters/cloudflareID');

chai.use(sinonChai);

describe('#bootstrap', () => {
  let app, log, winston, middlewares;

  beforeEach(() => {
    delete process.env['PRODUCTION_LOGGING'];
    delete process.env['NODE_ENV'];

    winston = { Logger: sinon.spy() };
    mockRequire('winston', winston);

    log = {};

    app = { use: sinon.spy(), getConfig: () => { return log; } };
  })

  afterEach(() => {
    delete process.env['PRODUCTION_LOGGING'];
    delete process.env['NODE_ENV'];
  })

  describe('if NODE_ENV is not production', () => {
    it('only adds the healthCheck middleware', () => {
      middlewares = proxyquire('../middlewares', {});

      middlewares.bootstrap(app);

      expect(app.use).to.have.been.calledWith(setCloudflareID);
      expect(app.use).to.have.been.calledWith('/health-check', healthCheck);
      expect(app.use).to.have.not.been.calledWith(morgan);
    })
  })

  describe('if PRODUCTION_LOGGING is not defined', () => {
    it('only adds the healthCheck middleware', () => {
      middlewares = proxyquire('../middlewares', {});

      middlewares.bootstrap(app);

      expect(app.use).to.have.been.calledWith(setCloudflareID);
      expect(app.use).to.have.been.calledWith('/health-check', healthCheck);
      expect(app.use).to.have.not.been.calledWith(morgan);
    })
  })

  describe('logging', () => {
    context('if NODE_ENV is production', () => {
      it('uses morgan and custom winston transports without the console transport', () => {
        process.env['NODE_ENV'] = 'production';

        middlewares = proxyquire('../middlewares', {});

        middlewares.bootstrap(app, 'true');

        expect(app.use).to.have.been.calledWith(setCloudflareID);
        expect(app.use).to.have.been.calledWith(morgan);
        expect(winston.Logger).to.have.been.calledWith({
          transports: [winstonErrorTransport(), winstonProductionTransport()],
          filters: [winstonCloudflareIDFilter]
        });
      })
    })

    context('if PRODUCTION_LOGGING is "true"', () => {
      it('uses morgan and custom winston transports without the console transport', () => {
        process.env['PRODUCTION_LOGGING'] = 'true';

        middlewares = proxyquire('../middlewares', {});

        middlewares.bootstrap(app, 'true');

        expect(app.use).to.have.been.calledWith(setCloudflareID);
        expect(app.use).to.have.been.calledWith(morgan);
        expect(winston.Logger).to.have.been.calledWith({
          transports: [winstonErrorTransport(), winstonProductionTransport()],
          filters: [winstonCloudflareIDFilter]
        });
      })
    })
  })
})
