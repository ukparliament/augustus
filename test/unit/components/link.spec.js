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
    const jsonFixture = fixtureHelper.getFixture('link-all-variables-components', 'json');

    shunterTestHelper.render('components__link', jsonFixture, function(error, dom, output) {
      const expectedHTML = fixtureHelper.getFixture('link-all-variables-components', 'html');

      assert.strictEqual(b(expectedHTML), b(output));

      done();
    });
  });

  it('when given all variables and text, should return html from the dust component', function(done) {
    const jsonFixture = fixtureHelper.getFixture('link-all-variables-text', 'json');

    shunterTestHelper.render('components__link', jsonFixture, function(error, dom, output) {
      const expectedHTML = fixtureHelper.getFixture('link-all-variables-text', 'html');

      assert.strictEqual(b(expectedHTML), b(output));

      done();
    });
  });

  it('when given only an href, should return html from the dust component', function(done) {
    const jsonFixture = fixtureHelper.getFixture('link-href', 'json');

    shunterTestHelper.render('components__link', jsonFixture, function(error, dom, output) {
      const expectedHTML = fixtureHelper.getFixture('link-href', 'html');

      assert.strictEqual(b(expectedHTML), b(output));

      done();
    });
  });

  it('when given an href and css class, should return html from the dust component', function(done) {
    const jsonFixture = fixtureHelper.getFixture('link-href-css-class', 'json');

    shunterTestHelper.render('components__link', jsonFixture, function(error, dom, output) {
      const expectedHTML = fixtureHelper.getFixture('link-href-css-class', 'html');

      assert.strictEqual(b(expectedHTML), b(output));

      done();
    });
  });

  it('when given an href, css class and a lable, should return html from the dust component', function(done) {
    const jsonFixture = fixtureHelper.getFixture('link-href-css-lable', 'json');

    shunterTestHelper.render('components__link', jsonFixture, function(error, dom, output) {
      const expectedHTML = fixtureHelper.getFixture('link-href-css-lable', 'html');

      assert.strictEqual(b(expectedHTML), b(output));

      done();
    });
  });

});
