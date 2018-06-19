const assert = require('assert');
const shunterTestHelper = require('shunter').testhelper();
const fixtureHelper = require('../../../helpers/fixture-helper');
const paths = require('../../../helpers/walk-helper');

const b = require('js-beautify').html;

describe('Search form dust component', function() {
  before(function() {
      shunterTestHelper.setup(paths);
  });

  after(shunterTestHelper.teardown);

  it('should return html from the dust component', function(done) {
    const jsonFixture = fixtureHelper.getFixture('search', 'json');

    shunterTestHelper.render('components__form__search', jsonFixture, function(error, dom, output) {
      const expectedHTML = fixtureHelper.getFixture('search', 'html');

      assert.strictEqual(b(expectedHTML), b(output));

      done();
    });
  });
});
