const testHelper = require('../../../helpers/test-helper');

describe('Status Banner dust component', function() {
  testHelper.setupBefore()

  it('when given a span, should return html from the dust component', function(done) {
    testHelper.shunterTest('banner-span', 'components__status__banner', 'components/status', done)
  });

  it('when not given span, should return html from the dust component', function(done) {
    testHelper.shunterTest('banner-no-span', 'components__status__banner', 'components/status', done)
  });

});
