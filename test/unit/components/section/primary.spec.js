const assert = require('assert');
const shunterTestHelper = require('shunter').testhelper();
const fixtureHelper = require('../../../helpers/fixture-helper');
const paths = require('../../../helpers/walk-helper');

const b = require('js-beautify').html;

describe('Section Primary dust component', function() {
  before(function() {
      shunterTestHelper.setup(paths);
  });

  after(shunterTestHelper.teardown);

  it('when given a content flag, should return html from the dust component', function(done) {
    const jsonFixture = fixtureHelper.getFixture('primary-flag', 'json');

    shunterTestHelper.render('components__section__primary', jsonFixture, function(error, dom, output) {
      const expectedHTML = fixtureHelper.getFixture('primary-flag', 'html');

      assert.strictEqual(b(expectedHTML), b(output));

      done();
    });
  });

  it('when not given a content flag, should return html from the dust component', function(done) {
    const jsonFixture = fixtureHelper.getFixture('primary-no-flag', 'json');

    shunterTestHelper.render('components__section__primary', jsonFixture, function(error, dom, output) {
      const expectedHTML = fixtureHelper.getFixture('primary-no-flag', 'html');

      assert.strictEqual(b(expectedHTML), b(output));

      done();
    });
  });

});
