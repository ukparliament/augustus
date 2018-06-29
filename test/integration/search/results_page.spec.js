const testHelper = require('../../helpers/test-helper');

describe('Search results page', function(){
  testHelper.setupBefore()

  it('should render content for search results page', function(done){
    testHelper.shunterTest('results_page', 'layout', 'integration/search', done)
  });
});
