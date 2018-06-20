const testHelper = require('../../helpers/test-helper');

describe('Footer dust component', function() {
  testHelper.setupBefore()

  it('should return html from the dust component', function(done) {
    testHelper.shunterTest('footer', 'components__footer', 'components', done)
  });
});
