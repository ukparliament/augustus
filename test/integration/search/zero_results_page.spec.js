const testHelper = require('../../helpers/test-helper');

describe('Zero search results page', function(){
  testHelper.setupBefore()

  it('should render content for zero search results page', function(done){
    testHelper.shunterTest('zero_results_page', 'layout', 'integration/search', done)
  });
});
