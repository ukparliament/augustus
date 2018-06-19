const assert = require('assert');
const shunterTestHelper = require('shunter').testhelper();
const fixtureHelper = require('../../helpers/fixture-helper');
const paths = require('../../helpers/walk-helper');

const b = require('js-beautify').html;

describe('Span dust component', function() {
  before(function() {
      shunterTestHelper.setup(paths);
  });

  after(shunterTestHelper.teardown);

  it('should return html from the dust component', function(done) {
    const jsonFixture = fixtureHelper.getFixture('span', 'json');

    shunterTestHelper.render('components__span', jsonFixture, function(error, dom, output) {
      const expectedHTML = fixtureHelper.getFixture('span', 'html');

      assert.strictEqual(b(expectedHTML), b(output));

      done();
    });
  });
});
