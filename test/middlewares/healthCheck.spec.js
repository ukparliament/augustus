const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const healthCheck = require('../../middlewares/healthCheck');

chai.use(sinonChai);

describe('healthCheck', () => {
  let response = { end: sinon.spy() };

  it('calls end with OK on response', () => {
    healthCheck('request', response);

    expect(response.end).to.have.been.calledWith('OK');
  });
});
