const testHelper = require('../../../../helpers/test-helper');

describe('Search result card dust component', function() {
  testHelper.setupBefore()

  it('should return html from the dust component', function(done) {
    testHelper.shunterTest('search-result', 'components__card__search__search-result', 'components/card/search', done)
  });
});
