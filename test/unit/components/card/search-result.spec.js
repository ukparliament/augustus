const assert = require('assert');
const shunterTestHelper = require('shunter').testhelper();
const fixtureHelper = require('../../../helpers/fixture-helper');
const paths = require('../../../helpers/walk-helper');

const b = require('js-beautify').html;

describe('Search result card dust component', function() {
  before(function() {
      shunterTestHelper.setup(paths);
  });

  after(shunterTestHelper.teardown);

  it('should return html from the dust component', function(done) {
    const jsonFixture = fixtureHelper.getFixture('search-result', 'json');

    shunterTestHelper.render('components__card__search-result', jsonFixture, function(error, dom, output) {
      const expectedHTML = fixtureHelper.getFixture('search-result', 'html');

      assert.strictEqual(b(expectedHTML), b(output));

      done();
    });
  });
});
