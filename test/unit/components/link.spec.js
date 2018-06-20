const testHelper = require('../../helpers/test-helper');

describe('Link dust component', function() {
  testHelper.setupBefore()

  it('when given all variables and components, should return html from the dust component', function(done) {
    testHelper.shunterTest('link-all-variables-components', 'components__link', 'components', done)
  });

  it('when given all variables and text, should return html from the dust component', function(done) {
    testHelper.shunterTest('link-all-variables-text', 'components__link', 'components', done)
  });

  it('when given only an href, should return html from the dust component', function(done) {
    testHelper.shunterTest('link-href', 'components__link', 'components', done)
  });

  it('when given an href and css class, should return html from the dust component', function(done) {
    testHelper.shunterTest('link-href-css-class', 'components__link', 'components', done)
  });

  it('when given an href, css class and a lable, should return html from the dust component', function(done) {
    testHelper.shunterTest('link-href-css-lable', 'components__link', 'components', done)
  });

});
