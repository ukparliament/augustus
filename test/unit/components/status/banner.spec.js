const testHelper = require('../../../helpers/test-helper');

describe('Status Banner dust component', function() {
  testHelper.setupBefore()

  it('should return html from the dust component', function(done) {
    testHelper.shunterTest('banner', 'components__status__banner', 'components/status', done)
  });

});
