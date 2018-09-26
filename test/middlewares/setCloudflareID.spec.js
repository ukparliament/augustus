const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const setCloudflareID = require('../../middlewares/setCloudflareID');

chai.use(sinonChai);

describe('setCloudflareID', () => {
  let request, response, next;

  beforeEach(() => {
    request = { headers: { 'cf-ray': undefined } };
    response = { setHeader: sinon.spy() };
    next = sinon.spy();
  });

  it('sets the header if cf_ray is undefined', () => {
    setCloudflareID(request, response, next);

    expect(response.setHeader).to.have.not.been.called;
    expect(next).to.have.been.called;
  });

  it('sets the header if cf_ray exists', () => {
    request = { headers: { 'cf-ray': 1234 } };
    setCloudflareID(request, response, next);

    expect(response.setHeader).to.have.been.calledWith('cf-ray', 1234);
    expect(next).to.have.been.called;
  });

  context('#getLabel', () => {
    it('returns the correct string', () => {
      request = { headers: { 'cf-ray': 1234 } };
      setCloudflareID(request, response, next);

      expect(setCloudflareID.getLabel()).to.eq('[Cloudflare ID: 1234]');
    });
  });
});
