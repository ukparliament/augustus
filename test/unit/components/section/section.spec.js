const testHelper = require('../../../helpers/test-helper');

describe('Section dust component', function() {
  testHelper.setupBefore()

  it('when given a content flag, should return html from the dust component', function(done) {
    testHelper.shunterTest('section-flag', 'components__section__section', 'components/section', done)
  });

  it('when not given a content flag, should return html from the dust component', function(done) {
    testHelper.shunterTest('section-no-flag', 'components__section__section', 'components/section', done)
  });

});
