const chai = require('chai');
const expect = chai.expect;
const fs = require('fs');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const robots = require('../../middlewares/robots');
const robotsFile = fs.readFileSync(process.cwd() + '/public/resources/robots.txt');

chai.use(sinonChai);

describe('Robots', () => {
  let response = {
    setHeader: sinon.spy(),
    write: sinon.spy(),
    end: sinon.spy()
  };

  it('call sets correct Header on response', () => {
    robots('request', response);

    expect(response.setHeader).to.have.been.calledWith('Content-Type', 'text/plain');
  });

  it('call end with correct Data on response', () => {
    robots('request', response);

    expect(response.write).to.have.been.calledWith(robotsFile);
  });

  it('call end', () => {
    robots('request', response);

    expect(response.end).to.have.been.calledWith();
  });
});
