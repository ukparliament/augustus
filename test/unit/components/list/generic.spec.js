const testHelper = require('../../../helpers/test-helper');

describe('Generic list dust component', function() {
  testHelper.setupBefore()

  it('when given components and a css class, should return html from the dust component', function(done) {
    testHelper.shunterTest('generic-components', 'components__list__generic', 'components/list', done)
  });

  it('when given contents and a css class, should return html from the dust component', function(done) {
    testHelper.shunterTest('generic-contents', 'components__list__generic', 'components/list', done)
  });

  it('when not given a css class, should return html from the dust component', function(done) {
    testHelper.shunterTest('generic-no-css-class', 'components__list__generic', 'components/list', done)
  });

});
