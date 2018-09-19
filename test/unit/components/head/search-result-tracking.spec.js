const testHelper = require('../../../helpers/test-helper');

describe('Search result specific appInsights script dust component', function() {
  testHelper.setupBefore()

  it('should return html from the dust component', function(done) {
    testHelper.shunterTest('search-result-tracking', 'components__head__search-result-tracking', 'components/head', done);
  });
});
