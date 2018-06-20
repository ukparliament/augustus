const testHelper = require('../../../helpers/test-helper');

describe('Status highlight dust component', function() {
  testHelper.setupBefore()

  it('should return html from the dust component', function(done) {
    testHelper.shunterTest('highlight', 'components__status__highlight', 'components/status', done)
  });
});
