const expect = require('chai').expect;
const app = require('../../app');

describe('App', function() {
  it('returns true for test', function() {
    expect(app.test).to.eq(true);
  });
});