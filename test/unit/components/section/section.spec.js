const assert = require('assert');
const shunterTestHelper = require('shunter').testhelper();
const fixtureHelper = require('../../../helpers/fixture-helper');
const paths = require('../../../helpers/walk-helper');

const b = require('js-beautify').html;

describe('Section dust component', function() {
  before(function() {
      shunterTestHelper.setup(paths);
  });

  after(shunterTestHelper.teardown);

  it('when given a content flag, should return html from the dust component', function(done) {
    const jsonFixture = fixtureHelper.getJSONFixture('section-flag');

    shunterTestHelper.render('components__section__section', jsonFixture, function(error, dom, output) {
      const expectedHTML = fixtureHelper.getHTMLFixture('section-flag');

      assert.strictEqual(b(expectedHTML), b(output));

      done();
    });
  });

  it('when not given a content flag, should return html from the dust component', function(done) {
    const jsonFixture = fixtureHelper.getJSONFixture('section-no-flag');

    shunterTestHelper.render('components__section__section', jsonFixture, function(error, dom, output) {
      const expectedHTML = fixtureHelper.getHTMLFixture('section-no-flag');

      assert.strictEqual(b(expectedHTML), b(output));

      done();
    });
  });

});
