const assert = require('assert');
const shunterTestHelper = require('shunter').testhelper();
const fixtureHelper = require('../../../helpers/fixture-helper');
const paths = require('../../../helpers/walk-helper');

const b = require('js-beautify').html;

describe('Status Banner dust component', function() {
  before(function() {
      shunterTestHelper.setup(paths);
  });

  after(shunterTestHelper.teardown);

  it('when given a span, should return html from the dust component', function(done) {
    const jsonFixture = fixtureHelper.getJSONFixture('banner-span');

    shunterTestHelper.render('components__status__banner', jsonFixture, function(error, dom, output) {
      const expectedHTML = fixtureHelper.getHTMLFixture('banner-span');

      assert.strictEqual(b(expectedHTML), b(output));

      done();
    });
  });

  it('when not given span, should return html from the dust component', function(done) {
    const jsonFixture = fixtureHelper.getJSONFixture('banner-no-span');

    shunterTestHelper.render('components__status__banner', jsonFixture, function(error, dom, output) {
      const expectedHTML = fixtureHelper.getHTMLFixture('banner-no-span');

      assert.strictEqual(b(expectedHTML), b(output));

      done();
    });
  });

});
