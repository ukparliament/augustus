const testHelper = require('../../../helpers/test-helper');

describe('Search icon dust component', function() {
  testHelper.setupBefore()

  it('should return html from the dust component', function(done) {
    testHelper.shunterTest('search', 'components__icon__search', 'components/icon', done)
  });
});
