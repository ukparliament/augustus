const assert = require('assert');
const shunterTestHelper = require('shunter').testhelper();
const fixtureHelper = require('../../helpers/fixture-helper');
const paths = require('../../helpers/walk-helper');

const b = require('js-beautify').html;

describe('Skip to content dust component', function() {
  before(function() {
      shunterTestHelper.setup(paths);
  });

  after(shunterTestHelper.teardown);

  it('should return html from the dust component', function(done) {
    const jsonFixture = fixtureHelper.getJSONFixture('skip-to-content');

    shunterTestHelper.render('components__skip-to-content', jsonFixture, function(error, dom, output) {
      const expectedHTML = fixtureHelper.getHTMLFixture('skip-to-content');

      assert.strictEqual(b(expectedHTML), b(output));

      done();
    });
  });
});
