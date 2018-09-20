const chai = require('chai');
const expect = chai.expect;
const sinonChai = require('sinon-chai');
const proxyquire = require('proxyquire').noPreserveCache();
const mockRequire = require('mock-require');

describe('#cloudflareID', () => {
  let cloudflareID, extendedLogger;

  beforeEach(() => {
    delete process.env['PRODUCTION_LOGGING'];
    delete process.env['NODE_ENV'];

    extendedLogger = { getLabel: () => { return 'some label'; } };
    mockRequire('../../../middlewares/setCloudflareID', extendedLogger);
  });

  afterEach(() => {
    delete process.env['PRODUCTION_LOGGING'];
    delete process.env['NODE_ENV'];
  });

  context('if NODE_ENV is not production and PRODUCTION_LOGGING is "true"', () => {
    it('is undefined', () => {
      cloudflareID = proxyquire('../../../logging/filters/cloudflareID', {});

      expect(cloudflareID()).to.eq(undefined);
    });
  });

  context('if NODE_ENV is production', () => {
    it('returns the label', () => {
      process.env['NODE_ENV'] = 'production';

      cloudflareID = proxyquire('../../../logging/filters/cloudflareID', {});

      expect(cloudflareID()).to.eq('some label undefined');
    });
  });

  context('if PRODUCTION_LOGGING is "true"', () => {
    it('returns the label', () => {
      process.env['PRODUCTION_LOGGING'] = 'true';

      cloudflareID = proxyquire('../../../logging/filters/cloudflareID', {});

      expect(cloudflareID()).to.eq('some label undefined');
    });
  });
});
