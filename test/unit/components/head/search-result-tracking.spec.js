const testHelper = require('../../../helpers/test-helper');

describe('Search result specific appInsights script dust component', function() {
  testHelper.setupBefore()

  it('should return html from the dust component', function(done) {
    testHelper.shunterTest('search-result-tracking', 'components__foot__search-result-tracking', 'components/foot', done);
  });
});
