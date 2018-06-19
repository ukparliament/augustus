const assert = require('assert');
const shunterTestHelper = require('shunter').testhelper();
const fixtureHelper = require('../../../../helpers/fixture-helper');
const paths = require('../../../../helpers/walk-helper');

const b = require('js-beautify').html;

describe('Number navigation dust component', function() {
  before(function() {
      shunterTestHelper.setup(paths);
  });

  after(shunterTestHelper.teardown);

  it('should return html from the dust component', function(done) {
    const jsonFixture = fixtureHelper.getFixture('number', 'json');

    shunterTestHelper.render('components__navigation__number__number', jsonFixture, function(error, dom, output) {
      const expectedHTML = fixtureHelper.getFixture('number', 'html');

      assert.strictEqual(b(expectedHTML), b(output));

      done();
    });
  });
});
