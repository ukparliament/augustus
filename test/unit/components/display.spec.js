const testHelper = require('../../helpers/test-helper');

describe('Display dust component', function() {
  testHelper.setupBefore()

  it('should return html from the dust component', function(done) {
    testHelper.shunterTest('display', 'components__display', 'components', done)
  });
});
