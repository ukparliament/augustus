const assert = require('assert');
const shunterTestHelper = require('shunter').testhelper();
const fixtureHelper = require('../../helpers/fixture-helper');
const paths = require('../../helpers/walk-helper');

const b = require('js-beautify').html;

describe('Footer dust component', function() {
  before(function() {
      shunterTestHelper.setup(paths);
  });

  after(shunterTestHelper.teardown);

  it('should return html from the dust component', function(done) {
    const jsonFixture = fixtureHelper.getJSONFixture('footer');

    shunterTestHelper.render('components__footer', jsonFixture, function(error, dom, output) {
      const expectedHTML = fixtureHelper.getHTMLFixture('footer');

      assert.strictEqual(b(expectedHTML), b(output));

      done();
    });
  });
});
