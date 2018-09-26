const chai = require('chai');
const expect = chai.expect;
const sinonChai = require('sinon-chai');
const proxyquire = require('proxyquire').noPreserveCache();
const mockRequire = require('mock-require');

const timekeeper = require('timekeeper');
timekeeper.freeze(new Date(1330688329321));

chai.use(sinonChai);

describe('winston-console', () => {
  let winstonConsole, winston, cloudflareID, options;

  beforeEach(() => {
    cloudflareID = { getCloudflareID: () => { 'some id'; } }
    mockRequire('../../../middlewares/cloudflareID', cloudflareID);
  });

  context('#customFormat', () => {
    it('returns the correct JSON stringified', () => {
      options = { level: 'some level', message: 'some message' };

      winstonConsole = proxyquire('../../../logging/transports/winston-console', {});

      const expected = '{"timestamp":"2012-03-02T11:38:49.321Z","level":"some level","message":"some message"}';

      expect(winstonConsole.customFormat(options)).to.eq(expected);
    });
  });

  context('console transport', () => {
    beforeEach(() => {
      delete process.env['NODE_ENV'];
      delete process.env['PRODUCTION_LOGGING'];

      function constructor(options) { return options };

      winston = { transports: { Console: constructor } };
      mockRequire('winston', winston);
    });

    afterEach(() => {
      delete process.env['NODE_ENV'];
      delete process.env['PRODUCTION_LOGGING'];
    });

    context('in development', () => {
      it('creates a console transport with the correct options', () => {
        winstonConsole = proxyquire('../../../logging/transports/winston-console', {});

        expect(winstonConsole()).to.deep.equal({ colorize: true, timestamp: true, level: 'info' });
      });
    });

    context('when NODE_ENV is production', () => {
      it('creates a console transport with the correct options', () => {
        process.env['NODE_ENV'] = 'production';

        winstonConsole = proxyquire('../../../logging/transports/winston-console', {});

        expect(winstonConsole()).to.deep.equal({ level: 'info', formatter: winstonConsole.customFormat });
      });
    });
  });
});
