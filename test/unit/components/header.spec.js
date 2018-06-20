const testHelper = require('../../helpers/test-helper');


describe('Header dust component', function() {
  testHelper.setupBefore()

  it('should return html from the dust component', function(done) {
    testHelper.shunterTest('header', 'components__header', 'components', done)
  });
});
