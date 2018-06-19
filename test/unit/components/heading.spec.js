const assert = require('assert');
const shunterTestHelper = require('shunter').testhelper();
const fixtureHelper = require('../../helpers/fixture-helper');
const paths = require('../../helpers/walk-helper');

const b = require('js-beautify').html;

describe('Heading dust component', function() {
  before(function() {
      shunterTestHelper.setup(paths);
  });

  after(shunterTestHelper.teardown);

  it('when given a translation, should return html from the dust component', function(done) {
    const jsonFixture = fixtureHelper.getFixture('heading-translation', 'json');

    shunterTestHelper.render('components__heading', jsonFixture, function(error, dom, output) {
      const expectedHTML = fixtureHelper.getFixture('heading-translation', 'html');

      assert.strictEqual(b(expectedHTML), b(output));

      done();
    });
  });

  it('when given a string, should return html from the dust component', function(done){
    const jsonFixture = fixtureHelper.getFixture('heading-string', 'json');

    shunterTestHelper.render('components__heading', jsonFixture, function(error, dom, output) {
      const expectedHTML = fixtureHelper.getFixture('heading-string', 'html');

      assert.strictEqual(b(expectedHTML), b(output));

      done();
    });
  });

});
