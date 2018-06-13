const assert = require('assert');
const shunterTestHelper = require('shunter').testhelper();
const fixtureHelper = require('../../helpers/fixture-helper');
const paths = require('../../helpers/walk-helper');

const b = require('js-beautify').html;

describe('Link dust component', function() {
  before(function() {
      shunterTestHelper.setup(paths);
  });

  after(shunterTestHelper.teardown);

  it('when given all variables and components, should return html from the dust component', function(done) {
    const jsonFixture = fixtureHelper.getJSONFixture('link-all-variables-components');

    shunterTestHelper.render('components__link', jsonFixture, function(error, dom, output) {
      const expectedHTML = fixtureHelper.getHTMLFixture('link-all-variables-components');

      assert.strictEqual(b(expectedHTML), b(output));

      done();
    });
  });

  it('when given all variables and text, should return html from the dust component', function(done) {
    const jsonFixture = fixtureHelper.getJSONFixture('link-all-variables-text');

    shunterTestHelper.render('components__link', jsonFixture, function(error, dom, output) {
      const expectedHTML = fixtureHelper.getHTMLFixture('link-all-variables-text');

      assert.strictEqual(b(expectedHTML), b(output));

      done();
    });
  });

  it('when given only an href, should return html from the dust component', function(done) {
    const jsonFixture = fixtureHelper.getJSONFixture('link-href');

    shunterTestHelper.render('components__link', jsonFixture, function(error, dom, output) {
      const expectedHTML = fixtureHelper.getHTMLFixture('link-href');

      assert.strictEqual(b(expectedHTML), b(output));

      done();
    });
  });

  it('when given an href and css class, should return html from the dust component', function(done) {
    const jsonFixture = fixtureHelper.getJSONFixture('link-href-css-class');

    shunterTestHelper.render('components__link', jsonFixture, function(error, dom, output) {
      const expectedHTML = fixtureHelper.getHTMLFixture('link-href-css-class');

      assert.strictEqual(b(expectedHTML), b(output));

      done();
    });
  });

  it('when given an href, css class and a lable, should return html from the dust component', function(done) {
    const jsonFixture = fixtureHelper.getJSONFixture('link-href-css-lable');

    shunterTestHelper.render('components__link', jsonFixture, function(error, dom, output) {
      const expectedHTML = fixtureHelper.getHTMLFixture('link-href-css-lable');

      assert.strictEqual(b(expectedHTML), b(output));

      done();
    });
  });

});
