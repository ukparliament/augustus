const assert = require('assert');
const shunterTestHelper = require('shunter').testhelper();
const fixtureHelper = require('../../../helpers/fixture-helper');
const paths = require('../../../helpers/walk-helper');

const b = require('js-beautify').html;

describe('Status highlight dust component', function() {
  before(function() {
      shunterTestHelper.setup(paths);
  });

  after(shunterTestHelper.teardown);

  it('should return html from the dust component', function(done) {
    const jsonFixture = fixtureHelper.getJSONFixture('highlight');

    shunterTestHelper.render('components__status__highlight', jsonFixture, function(error, dom, output) {
      const expectedHTML = fixtureHelper.getHTMLFixture('highlight');

      assert.strictEqual(b(expectedHTML), b(output));

      done();
    });
  });
});
