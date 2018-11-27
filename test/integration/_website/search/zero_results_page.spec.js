const testHelper = require(process.cwd() + '/test/helpers/test-helper');

describe('Zero search results page', function(){
  testHelper.setupBefore();

  it('should render content for zero search results page', function(done){
    testHelper.shunterTest('zero_results', 'layout', '_website/search', done, true);
  });
});
