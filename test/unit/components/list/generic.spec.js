const assert = require('assert');
const shunterTestHelper = require('shunter').testhelper();
const fixtureHelper = require('../../../helpers/fixture-helper');
const paths = require('../../../helpers/walk-helper');

const b = require('js-beautify').html;

describe('Generic list dust component', function() {
  before(function() {
      shunterTestHelper.setup(paths);
  });

  after(shunterTestHelper.teardown);

  it('when given components and a css class, should return html from the dust component', function(done) {
    const jsonFixture = fixtureHelper.getJSONFixture('generic-components');

    shunterTestHelper.render('components__list__generic', jsonFixture, function(error, dom, output) {
      const expectedHTML = fixtureHelper.getHTMLFixture('generic-components');

      assert.strictEqual(b(expectedHTML), b(output));

      done();
    });
  });

  it('when given contents and a css class, should return html from the dust component', function(done) {
    const jsonFixture = fixtureHelper.getJSONFixture('generic-contents');

    shunterTestHelper.render('components__list__generic', jsonFixture, function(error, dom, output) {
      const expectedHTML = fixtureHelper.getHTMLFixture('generic-contents');

      assert.strictEqual(b(expectedHTML), b(output));

      done();
    });
  });

  it('when not given a css class, should return html from the dust component', function(done) {
    const jsonFixture = fixtureHelper.getJSONFixture('generic-no-css-class');

    shunterTestHelper.render('components__list__generic', jsonFixture, function(error, dom, output) {
      const expectedHTML = fixtureHelper.getHTMLFixture('generic-no-css-class');

      assert.strictEqual(b(expectedHTML), b(output));

      done();
    });
  });

});
