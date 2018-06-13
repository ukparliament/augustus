const assert = require('assert');
const shunterTestHelper = require('shunter').testhelper();
const fixtureHelper = require('../../../../helpers/fixture-helper');
const paths = require('../../../../helpers/walk-helper');

const b = require('js-beautify').html;

describe('Number navigation card dust component', function() {
  before(function() {
      shunterTestHelper.setup(paths);
  });

  after(shunterTestHelper.teardown);

  it('when give active class, should return html from the dust component', function(done) {
    const jsonFixture = fixtureHelper.getJSONFixture('card-active');

    shunterTestHelper.render('components__navigation__number__card', jsonFixture, function(error, dom, output) {
      const expectedHTML = fixtureHelper.getHTMLFixture('card-active');

      assert.strictEqual(b(expectedHTML), b(output));

      done();
    });
  });

  it('when not given active class, should return html from the dust component', function(done) {
    const jsonFixture = fixtureHelper.getJSONFixture('card-not-active');

    shunterTestHelper.render('components__navigation__number__card', jsonFixture, function(error, dom, output) {
      const expectedHTML = fixtureHelper.getHTMLFixture('card-not-active');

      assert.strictEqual(b(expectedHTML), b(output));

      done();
    });
  });

});
