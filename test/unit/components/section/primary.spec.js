const testHelper = require('../../../helpers/test-helper');

describe('Section Primary dust component', function() {
  testHelper.setupBefore()

  it('when given a content flag, should return html from the dust component', function(done) {
    testHelper.shunterTest('primary-flag', 'components__section__primary', 'components/section', done)
  });

  it('when not given a content flag, should return html from the dust component', function(done) {
    testHelper.shunterTest('primary-no-flag', 'components__section__primary', 'components/section', done)
  });

});
