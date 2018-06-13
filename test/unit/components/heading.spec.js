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
    const jsonFixture = fixtureHelper.getJSONFixture('heading-translation');

    shunterTestHelper.render('components__heading', jsonFixture, function(error, dom, output) {
      const expectedHTML = fixtureHelper.getHTMLFixture('heading-translation');

      assert.strictEqual(b(expectedHTML), b(output));

      done();
    });
  });

  it('when given a string, should return html from the dust component', function(done){
    const jsonFixture = fixtureHelper.getJSONFixture('heading-string');

    shunterTestHelper.render('components__heading', jsonFixture, function(error, dom, output) {
      const expectedHTML = fixtureHelper.getHTMLFixture('heading-string');

      assert.strictEqual(b(expectedHTML), b(output));

      done();
    });
  });

});
